define(['./app'], function(app) {
	return app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/index");

            $stateProvider
                .state('index', {
                    url: '/index',
                    templateUrl: "tpls/index.html",
                    controller: 'indexCtrl'
                })
                // .state('goods', {
                //     url: '/goods',
                //     views: {
                //         '': {
                //             templateUrl: 'tpls/goods.html',
                //             controller: 'goodsCtrl'
                //         },
                //         'detail@goods': {
                //             templateUrl: 'tpls/goodsDetail.html'
                //         }
                //     }

                // })
        }
    ]);
});

