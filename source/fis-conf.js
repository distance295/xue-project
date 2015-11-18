//fis.hook('module', {
//    mode: 'amd' // 模块化支持 amd 规范，适应 require.js
//});
fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    '/static/**',
    'widget/**/*.html',
    'widget/**/*.css',
    '/config/**',
    '/components/**',
    '/lib/foundation/**',
    '/lib/Font-Awesome/master/**',
    'fis-conf.js',
    'fis-conf-pages.js',
    '/pages/**',
    '/template/Layer/*',
    '/**/*.bat',
    '*.bat',
    '*.sh',
    '*.log',
    '**/*.map'
]);
//fis.match('/widget/**', {
//    useSameNameRequire: true,
//    isMod: true
//});
fis.match('::packager', {
    //    spriter: fis.plugin('csssprites'),
    postpackager: fis.plugin('loader', {
//        allInOne: true
    })
});
//fis.config.merge({
//    settings : {
//        optimizer : {
//            'png-compressor' : {
//                type : 'pngquant' //default is pngcrush
//            }
//        }
//    }
//});
fis.match('*.less', {
    parser: fis.plugin('less'), //启用fis-parser-less插件
    rExt: '.css'
})
//fis.match('/**/*.tpl', {
//    isHtmlLike: true,
//    release: false
//})

//fis.match('::image', {
//    release : '/static/img/$0'
////    packTo: '/static/img/$0',
////    url: '/static/img/$0'
//})
fis.match('/widget/**/*.html', {
    packTo: '/temp/html.temp'
//    release:false
})



fis.media('tmpl')
    .match('/template/(**)/(*).tpl', {
        isHtmlLike: true,
        rExt: '.html',
        release: '/pages/$1.$2.html'
    })
    .match('/widget/**/*.tpl', {
        isHtmlLike: true,
        packTo: '/temp/temp.html',
        release: false
    })

    .match('/lib/*', {
        release: '/lib/$0'
    })
    .match('/data/*', {
        release: '/data/$0'
    })
    .match('/widget/(**)/(*.json)', {
        release: '/data/$1/js/$2',
    })
    .match('/widget/(**)/*.md', {
        release: false
    })
    .match('/widget/(**)/*.js', {
        release: '/static/js/$1.js',
    })
    .match('/widget/(**)/*.less', {
        parser: fis.plugin('less'), //启用fis-parser-less插件
        rExt: '.css',
        release: '/static/css/$1.css'
    })
    // 这里是资源图片规则
    .match('/widget/(*)/pic/(*.{png,jpg,gif,cur})', {
        release: '/static/pic/$1$3$5$7/$2$4$6$8'
    })
    // 这里是素材图片规则
    .match('/widget/(*)/img/(*.{png,jpg,gif,cur})', {
        release: '/static/img/$1$3$5$7/$2$4$6$8'
    })
    .match('/widget/(**)/img/(**)/(*.png)', {
        release:'/static/img/$1/$2/$3'
    })



    
    
    

;
