define(['./app'], function(app) {
	return app.config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/goods");

            $stateProvider
                .state('goods', {
                    url: '/goods',
                    templateUrl: "tpls/goods.html?"+new Date().getTime(),
                    controller: 'goodsCtrl'
                })


                .state('order', {
                    url: '/order',
                    templateUrl: "tpls/order.html?"+new Date().getTime(),
                    controller: 'orderCtrl'
                })
                .state('order.bz', {
                    views: {
                        'bz@order': {

                        }
                    }

                })


                .state('orderPay', {
                    url: '/orderPay',
                    templateUrl: "tpls/order-pay.html?"+new Date().getTime()

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

