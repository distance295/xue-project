

// ===================================== //

// 支持内置语法，无非就三种：JS、CSS、HTML
// fis.match('*.tmpl', {
//   isJsLike: true
// });
fis.match('*.tpl', {
    isHtmlLike: true
});

// fis-parser-less
fis.match('*.less', {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})

// 所有的文件产出到 static/ 目录下
fis.match('*', {
    release: '/dist/$0'
});

// 所有模板放到 tempalte 目录下
fis.match('*.html', {
    release: '/dist/pages/$0',
    url: '/pages/$0'

});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js'),
    release: '/dist/static/script/$0',
    url: '/static/js$0'
});


fis.match('*.css', {
    optimizer: fis.plugin('uglify-js'),
    release: '/dist/static/style/$0',
    url: '/static/css$0'
});

fis.match('/source/widget/**/img/(*.{png,gif,jpg})', {
    release: '/dist/static/img/$0',
    url: '/static/img$0'
});

// widget源码目录下的资源被标注为组件
fis.match('/widget/**/*', {
    isMod: true
});

// widget下的 js 调用 jswrapper 进行自动化组件化封装
fis.match('/widget/**/*.js', {
    postprocessor: fis.plugin('jswrapper', {
        type: 'commonjs'
    })
});

xue.match('::package', {
    postpackager: fis.plugin('loader',{
        allInOne: true,
        processor: {
            '.html': 'html',

            // 支持 markdown 文档
            '.md': 'html'
        }
    }),
    spriter: xue.plugin('csssprites')
});

fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**'
]);
