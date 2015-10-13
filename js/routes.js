define(['./app'], function(app) {
	return app.config(['$stateProvider', '$urlRouterProvider', 'dialogServiceProvider', 'loadingServiceProvider',
        function($stateProvider, $urlRouterProvider, dialogServiceProvider, loadingServiceProvider) {
            $urlRouterProvider.otherwise("/goods");

            $stateProvider
                .state('goods', {
                    url: '/goods',
                    templateUrl: "tpls/goods.html?"+new Date().getTime(),
                    controller: 'goodsCtrl'
                })
                .state('order', {
                    url: '/order',
                    views: {
                        '': {
                            templateUrl: "tpls/order.html?"+new Date().getTime(),
                            controller: 'orderCtrl'
                        },
                        'bz@order': {
                            templateUrl: 'tpls/bz.html?'+new Date().getTime()
                        }
                    }
                })
                .state('orderPay', {
                    url: '/orderPay',
                    templateUrl: "tpls/order-pay.html?"+new Date().getTime()
                })
                .state('message', {
                    url: '/message',
                    templateUrl: "tpls/message.html?"+new Date().getTime()
                })
                .state('orderList', {
                    url: '/orderList',
                    templateUrl: "tpls/order-list.html?"+new Date().getTime()
                })
                .state('orderDetail', {
                    url: '/orderDetail/:id',
                    templateUrl: "tpls/order-detail.html?"+new Date().getTime()
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


            dialogServiceProvider.myCfg.title = '提示1';
            dialogServiceProvider.myCfg.content = '请输入内容2';
            dialogServiceProvider.myCfg.text4OkBtn = '确定2';
            dialogServiceProvider.myCfg.text4CancelBtn = '提示1';
            dialogServiceProvider.myCfg.title = '取消2';


            loadingServiceProvider.cfg.type = 2;
        }
    ]);
});

