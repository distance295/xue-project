fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'widget/**/*.html',
    'widget/**/*.css',
    'widget/**/*.md',
    '/config/**',
    '/static/**',
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
fis.match('::packager', {
    packager: fis.plugin('map'),
    postpackager: fis.plugin('loader', {
//        allInOne: true
    })
});



fis.media('tmpl')

// 主模板文件规则
    .match('/template/(**)/(*).tpl', {
        isHtmlLike: true,
        rExt: '.html',
        release: '/pages/$1/$2.html'
    })

// 禁止发布的文件
    .match('/widget/(**)/*.{md,tpl,html}', {
        release: false
    })

// 不做修改直接拷贝的目录
    .match('/lib/*', {
        release: '/lib/$0'
    })
    .match('/data/*', {
        release: '/data/$0'
    })

// JSON文件规则
    .match('/widget/(**)/(*.json)', {
        release: '/data/$1/js/$2',
    })

// JS规则
    .match('/widget/(**)/(*.js)', {
        release: '/static/js/$1.$2'
    })

// Less规则
    .match('/widget/(**)/(*.less)', {
        parser: fis.plugin('less'), //启用fis-parser-less插件
        rExt: '.css',
        release: '/static/css/$1/$2'
    })

// pic资源图片规则
    .match('/widget/(*)/pic/(*.{png,jpg,gif,cur})', {
        release: '/static/pic/$1$3$5$7/$2$4$6$8'
    })

// img素材图片规则
    .match('/widget/(*)/img/(*.{png,jpg,gif,cur})', {
        release: '/static/img/$1$3$5$7/$2$4$6$8'
    })

// img里面存在文件夹时的规则
    .match('/widget/(**)/img/(**)/(*.png)', {
        release:'/static/img/$1/$2/$3'
    })




    
    
    

;
