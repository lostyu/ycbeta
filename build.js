({
    appDir: './',
    baseUrl: './js',
    dir: './dist',
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,

    paths: {
        'jquery': '../libs/jquery/jquery-1.11.1.min',

        'angular': '../libs/angular/1.3.0.14/angular',
        'angular-ui-route': '../libs/angular/angular-ui-router/angular-ui-router.min',
        'angular-animate': '../libs/angular/1.3.0.14/angular-animate',
        'angular-touch': '../libs/angular/1.3.0.14/angular-touch.min',

        'domReady': '../libs/requirejs/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-route': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        }
    },

    modules: [
        {
            name: 'bootstrap'
        }
    ]
})
