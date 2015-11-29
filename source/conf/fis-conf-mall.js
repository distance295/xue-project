fis.set('project.ignore', [
    'deploy.bat',
    'map.json',
    'fis-conf.js',
    'pages/_layer.html',
    'static/js/_temp.js',
    'static/css/_temp.css',
    'conf/*'
]);

fis.media('mall')
    .match('*', {
      release: '/$0'
    })
    .match('/static/img/{Public.Topbar}/*', {
        release: false
    })
;