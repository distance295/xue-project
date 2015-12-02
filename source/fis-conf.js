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
    '/lib/foundation/**',
    '/lib/Font-Awesome/master/**',
    'fis-conf.js',
    'fis-conf-pages.js',
    '/pages/**',
    '/template/Layer/*',
    '*.bat',
    '*.sh',
    '*.log',
    '**/*.map'    
]);
fis.match('::packager', {
    packager: fis.plugin('map'),
    postpackager: fis.plugin('loader', {

    })
});


fis.match('*.less', {
    parser: fis.plugin('less'), //启用fis-parser-less插件
    rExt: '.css'
})


// ----------------------------------------------------------------------------- tmpl

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
    .match('/static/less/(*.less)', {
        parser: fis.plugin('less'), //启用fis-parser-less插件
        rExt: '.css',
        release: '/static/css/$1'
    })
    // pic资源图片规则
    .match('/widget/(*)/pic/(*.{png,jpg,gif,cur})', {
        release: '/static/pic/$1$3$5$7/$2$4$6$8'
    })
    // img素材图片规则
    .match('/widget/(*)/img/(*.{png,jpg,gif,cur})', {
        release: '/static/img/$2$4$6$8'
    })
    // img里面存在文件夹时的规则
    .match('/widget/(**)/img/(**)/(*.png)', {
        release:'/static/img/$3'
    })
;







// ============================================================================= ignore
var __module = {
    account : [
        'UM.address',
        'UM.balance',
        'UM.bill',
        'UM.certificate',
        'UM.money',
        'UM.Nav',
        'UM.none',
        'UM.order',
        'UM.password',
        'UM.all.order',
        'UM.Basic.information',
        'UM.card.activation',
        'UM.card.learn',
        'UM.certificate.binding',
        'UM.head.photo',
        'UM.mobile.phone',
        'UM.third.bind'
    ],
    home : [
        'UserHome.alert',
        'UserHome.courses',
        'UserHome.gold',
        'UserHome.header',
        'UserHome.homework',        
        'UserHome.learning',
        'UserHome.notice',
        'UserHome.perfection',
        'UserHome.sidebar',
        'UserHome.wrongQues'
    ],
    mall : [
        'Mall.courseInfo',
        'Mall.FindTeacher',
        'Mall.help',
        'Mall.indexGrade',
        'Mall.indexTrends',
        'Mall.live',
        'Mall.personCenter'
    ],
    public: [
        'Public.Address',
        'Public.Dynamic',
        'Public.FocusPic',
        'Public.Footer',
        'Public.Header',
        'Public.MiniCart',
        'Public.Module',
        'Public.Nav',
        'Public.Topbar'        
    ]
    
};
var __ignore = {
    account : [
        'Mall.courseInfo',
        'Mall.FindTeacher',
        'Mall.help',
        'Mall.indexGrade',
        'Mall.indexTrends',
        'Mall.live',
        'Mall.personCenter',
        'Public.Dynamic',
        'Public.FocusPic',
        'Public.Footer',
        'Public.Header',
        'Public.MiniCart',
        'Public.Module',
        'Public.Nav',
        'Public.Selector',
        'UserHome.alert',
        'UserHome.courses',
        'UserHome.gold',
        'UserHome.homework',        
        'UserHome.learning',
        'UserHome.notice',
        'UserHome.perfection',
        'UserHome.sidebar',
        'UserHome.wrongQues'
    ].toString(),
    home : [
        'Mall.courseInfo',
        'Mall.FindTeacher',
        'Mall.help',
        'Mall.indexGrade',
        'Mall.indexTrends',
        'Mall.live',
        'Mall.personCenter',
        'UM.address',
        'UM.balance',
        'UM.bill',
        'UM.certificate',
        'UM.money',
        'UM.Nav',
        'UM.none',
        'UM.order',
        'UM.password',
        'UM.all.order',
        'UM.Basic.information',
        'UM.card.activation',
        'UM.card.learn',
        'UM.certificate.binding',
        'UM.head.photo',
        'UM.mobile.phone',
        'UM.third.bind',
        'Public.FocusPic',
        'Public.Footer',
        'Public.Header',
        'Public.MiniCart',
        'UserHome.gold',    // 临时屏蔽下
        'Public.Nav',
        'Public.Selector'        
    ].toString(),
    mall : [
        'UM.address',
        'UM.balance',
        'UM.bill',
        'UM.certificate',
        'UM.money',
        'UM.Nav',
        'UM.none',
        'UM.order',
        'UM.password',
        'UM.all.order',
        'UM.Basic.information',
        'UM.card.activation',
        'UM.card.learn',
        'UM.certificate.binding',
        'UM.head.photo',
        'UM.mobile.phone',
        'UM.third.bind',
        'UserHome.alert',
        'UserHome.courses',
        'UserHome.gold',
        'UserHome.header',
        'UserHome.homework',        
        'UserHome.learning',
        'UserHome.notice',
        'UserHome.perfection',
        'UserHome.sidebar',
        'UserHome.wrongQues'
    ].toString()
};

// ----------------------------------------------------------------------------- user manage
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
    .match('/conf/*',{
        release: false
    })
    .match('/conf/fis-conf-account.js',{
        release: '/fis-conf.js'
    })
    .match('/conf/deploy-account.bat',{
        release: '/deploy.bat'
    })
;
// ----------------------------------------------------------------------------- home

fis.media('home')
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
    .match('/template/UserHome/(*).tpl', {
        isHtmlLike: true,
        rExt: '.html',
        release: '/pages/$1.html'
    })
    .match('/template/{UserManage,Mall,Layer}/*', {
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
        packTo: '/static/js/xue.userhome.js'
    })
    // Less规则
    .match('/widget/(**)/(*.less)', {
        parser: fis.plugin('less'),
        rExt: '.css',
        release: '/static/css/_temp.css',
        packTo: '/static/css/xue.userhome.css'
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
    .match('/widget/{'+ __ignore.home +'}/**', {
        release: false
    })
    .match('/widget/Public.Topbar/img/*', {
        release: false
    })
    .match('/template/UserHome/GoldIndex.tpl',{
        release: false
    })
    // ----------------
    .match('/conf/*',{
        release: false
    })
    .match('/conf/fis-conf-home.js',{
        release: '/fis-conf.js'
    })
    .match('/conf/deploy-home.bat',{
        release: '/deploy.bat'
    })
;

// ----------------------------------------------------------------------------- mall

fis.media('mall')
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
    .match('/template/Mall/(*).tpl', {
        isHtmlLike: true,
        rExt: '.html',
        release: '/pages/$1.html'
    })
    .match('/template/{UserManage,UserHome,Layer}/*', {
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
        packTo: '/static/js/xue.mall.js'
    })
    // Less规则
    .match('/widget/(**)/(*.less)', {
        parser: fis.plugin('less'),
        rExt: '.css',
        release: '/static/css/_temp.css',
        packTo: '/static/css/xue.mall.css'
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
    .match('/widget/{'+ __ignore.mall +'}/**', {
        release: false
    })
    .match('/widget/Public.Topbar/img/*', {
        release: false
    })
    // ----------------
    .match('/conf/*',{
        release: false
    })
    .match('/conf/fis-conf-mall.js',{
        release: '/fis-conf.js'
    })
    .match('/conf/deploy-mall.bat',{
        release: '/deploy.bat'
    })
;