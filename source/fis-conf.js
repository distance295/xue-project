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
    '/config/**',
    '/components/**',
    '/lib/foundation/**',
    'fis-conf.js'
]);
fis.match('/widget/**', {
    useSameNameRequire: true,
    isMod: true
});
fis.match('::packager', {
    //    spriter: fis.plugin('csssprites'),
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});
fis.media('pages')
    .match('/pages/(*).html', {
        release: '/pages/$1.html'
    })
    .match('/lib/*', {
        release: '/lib/$0'
    })
    .match('*.less', {
        parser: fis.plugin('less'), //启用fis-parser-less插件
        rExt: '.css'
    })
    .match('/widget/(**)/*.js', {
        packTo: '/static/js/$1.js',
        url: '/static/js/$1.js'
    })
    .match('/widget/(**)/*.css', {
//        optimizer: fis.plugin('clean-css'),
        packTo: '/static/css/$1.css',
        url: '/static/css/$1.css'
    })
    .match('/widget/(**)/*.less', {
//        optimizer: fis.plugin('clean-css'),
        packTo: '/static/css/$1.css',
        url: '/static/css/$1.css'
    })
    .match('/widget/**/(*.{jpg,png,gif})', {
        packTo: '/static/img/$1$2$3',
        url: '/static/img/$1$2$3'
    })
    .match('/**/*.tpl', {
        isHtmlLike: true,
        release: false
    })
    //    // 压缩 index.tpl 内联的 js
    //    .match('index.tpl:js', {
    //        optimizer: fis.plugin('uglify-js')
    //    })



;
