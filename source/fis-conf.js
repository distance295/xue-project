//fis.hook('module', {
//    mode: 'amd' // 模块化支持 amd 规范，适应 require.js
//});
fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    '/static/**',
    '/source/**',
    '/widget/**',
    '/widget/**',
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
    '*.log'
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
fis.config.merge({
    settings : {
        optimizer : {
            'png-compressor' : {
                type : 'pngquant' //default is pngcrush
            }
        }
    }
});
fis.match('*.less', {
    parser: fis.plugin('less'), //启用fis-parser-less插件
    rExt: '.css'
})
fis.match('/**/*.tpl', {
    isHtmlLike: true,
    release: false
})
fis.media('tmpl')
    .match('/template/(**)/(*).tpl', {
        isHtmlLike: true,
        rExt: '.html',
        release: '/pages/$1.$2.html'
    })
    .match('/lib/*', {
        release: '/lib/$0'
    })
    .match('/data/*', {
        release: '/data/$0'
    })

    .match('/widget/(**)/*.js', {
        packTo: '/static/js/$1.js',
        url: '/static/js/$1.js'
    })
    .match('/widget/(**)/*.less', {
        parser: fis.plugin('less'), //启用fis-parser-less插件
        rExt: '.css',
        packTo: '/static/css/$1.css',
        url: '/static/css/$1.css'
    })
    .match('/widget/**/::image', {
        packTo: '/static/img/$0',
        url: '/static/img/$0'
    })

    

;
