define(['./app'], function(app) {
	return app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/goods");

            $stateProvider
                .state('goods', {
                    url: '/goods',
                    templateUrl: "tpls/goods.html",
                    controller: 'goodsCtrl'
                })
                .state('order', {
                    url: '/order',
                    templateUrl: "tpls/order.html",
                    controller: 'orderCtrl'
                })
                .state('orderPay', {
                    url: '/orderPay',
                    templateUrl: "tpls/order-pay.html"

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

