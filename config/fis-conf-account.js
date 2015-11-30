fis.set('project.ignore', [
    'output/**',
    'node_modules/**',
    '.git/**',
    '.svn/**',
    'widget/**/*.html',
    'widget/**/*.css',
    'widget/**/*.md',
    '/config/**',
    '/pages/**',
    '/components/**',
    'static/css/default.css',
    '/lib/foundation/**',
    '/lib/Font-Awesome/master/**',
    'fis-conf.js',
    'fis-conf-pages.js',
    '/pages/**',
    '/template/Layer/*',
//    '/**/*.bat',
    '*.bat',
    '*.sh',
    '*.log',
    '**/*.map',
    'widget/courses/**',
    'widget/courseStudycenter/**',
    'widget/errorQuestion/**',
    'widget/filter/**',
    'widget/find-teacher/**',
    'widget/footer/**',
    'widget/fresh/**',
    'widget/glory/**',
    'widget/gold/**',
    'widget/header/**',
    'widget/live/**',
    'widget/notice/**',
    'widget/_homework/**'
]);
//fis.match('::packager', {
//    packager: fis.plugin('map'),
//    postpackager: fis.plugin('loader', {
//
//    })
//});
//
//
//fis.match('*.less', {
//    parser: fis.plugin('less'), //启用fis-parser-less插件
//    rExt: '.css'
//});
//
var __ignore = {
    account : [
        'homework',
        'help',
        'courseInfor',
        'indexTrends',
        'Mall.FindTeacher',
        'Mall.live',
        'Mall.personCenter',
        'myCollect',
        'perfect-information',
        'personalCenter',
        'Public.Dynamic',
        'Public.FocusPic',
        'Public.Footer',
        'Public.Header',
        'Public.MiniCart',
        'Public.Module',
        'Public.Nav',
        'studyCourse',
        'user.manage',
        'UserHome.alert',
        'UserHome.courses',
        'UserHome.gold',
        'UserHome.notice',
        'UserHome.sidebar',
        'UserHome.wrongQues'
    ].toString()
};

fis.media('um')
    .match('::packager', {
        packager: fis.plugin('map'),
        postpackager: fis.plugin('loader', {
            allInOne: true,
            processor : {
                '.less':'css',
                '.tpl':'html'
            }
        })
    })
    // 主模板文件规则
    .match('/template/UserManage/(*).tpl', {
        isHtmlLike: true,
        rExt: '.html',
        release: '/pages/$1.html'
    })
    .match('/template/{UserHome,Mall,Layer}/*', {
        release: false
    })

    // 禁止发布的文件
    .match('/widget/(**)/*.{md,tpl,html,css,mp3}', {
        release: false
    })
    .match('/static/less/(*)',{
        parser: fis.plugin('less'),
        rExt: '.css',
        release: '/static/css/$1',
    })
    .match('/data/**', {
        release: false
    })

    .match('/lib/*', {
        release: '/lib/$0',
        packTo: '/lib/$0'
    })
    
    .match('/data/Public.Nav/nav.json',{
        release: '/data/Public.Nav.json'
    })
    // JSON文件规则
    .match('/widget/(**)/(*.json)', {
        release: false
    })
    // JS规则
    .match('/widget/(**)/(*.js)', {
        release: '/static/js/_temp.js',
        packTo: '/static/js/xue.usermanage.js'
    })
    // Less规则
    .match('/widget/(**)/(*.less)', {
        parser: fis.plugin('less'),
        rExt: '.css',
        release: '/static/css/_temp.css',
        packTo: '/static/css/xue.usermanage.css'
    })

    // pic资源图片规则
    .match('/widget/(*)/pic/(*.{png,jpg,gif,cur})', {
        release: '/static/pic/$2$4$6$8'
    })
    // img素材图片规则
    .match('/widget/(*)/img/(*.{png,jpg,gif,cur})', {
        release: '/static/img/$2$4$6$8'
    })
    // img里面存在文件夹时的规则
    .match('/widget/(**)/img/(**)/(*.png)', {
        release:'/static/img/$3'
    })

    // ----------------
    .match('/widget/{'+ __ignore.account +'}/**', {
        release: false
    })
    .match('/static/pic/Dynamic/*', {
        release: false
    })
    .match('/widget/Public.Topbar/img/*', {
        release: false
    })
    // ----------------

    .match('/conf/fis-conf-account.js',{
        release: '/fis-conf.js'
    })
    .match('/conf/deploy-account.bat',{
        release: '/deploy.bat'
    })
;

















//
//
//fis.media('tmpl')
//    // 主模板文件规则
//    .match('/template/(**)/(*).tpl', {
//        isHtmlLike: true,
//        rExt: '.html',
//        release: '/pages/$1/$2.html'
//    })
//    // 禁止发布的文件
//    .match('/widget/(**)/*.{md,tpl,html}', {
//        release: false
//    })
//    // 不做修改直接拷贝的目录
//    .match('/lib/*', {
//        release: '/lib/$0'
//    })
//    .match('/data/*', {
//        release: '/data/$0'
//    })
//    // JSON文件规则
//    .match('/widget/(**)/(*.json)', {
//        release: '/data/$1/js/$2',
//    })
//    // JS规则
//    .match('/widget/(**)/(*.js)', {
//        release: '/static/js/$1.$2'
//    })
//    // Less规则
//    .match('/widget/(**)/(*.less)', {
//        parser: fis.plugin('less'), //启用fis-parser-less插件
//        rExt: '.css',
//        release: '/static/css/$1/$2'
//    })
//    .match('/static/less/(*.less)', {
//        parser: fis.plugin('less'), //启用fis-parser-less插件
//        rExt: '.css',
//        release: '/static/css/$1'
//    })
//    // pic资源图片规则
//    .match('/widget/(*)/pic/(*.{png,jpg,gif,cur})', {
//        release: '/static/pic/$1$3$5$7/$2$4$6$8'
//    })
//    // img素材图片规则
//    .match('/widget/(*)/img/(*.{png,jpg,gif,cur})', {
//        release: '/static/img/$1$3$5$7/$2$4$6$8'
//    })
//    // img里面存在文件夹时的规则
//    .match('/widget/(**)/img/(**)/(*.png)', {
//        release:'/static/img/$1/$2/$3'
//    })
//;
//
//
//
//




