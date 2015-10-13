define(['./module'], function(module) {
	module.controller('goodsCtrl', [
        '$scope', '$http', 'cartService', 'dialogService', 'loadingService', function($scope, $http, cartService, dialogService, loadingService) {

        // 数据
		$scope.title = '商品列表';
        $scope.classify = [
            {
                url: 'menu1.json',
                name: '推荐',
                current: true
            },
            {
                url: 'menu2.json',
                name: '三明治',
                current: false
            },
            {
                url: 'menu1.json',
                name: '咖啡',
                current: false
            },
            {
                url: 'menu2.json',
                name: '轻食',
                current: false
            },
            {
                url: 'menu1.json',
                name: '主食',
                current: false
            },
            {
                url: 'menu2.json',
                name: '饮料',
                current: false
            }
        ];

        $scope.goods = [];

        // 设置标题
        document.title = $scope.title;


        $scope.changeClassify = function(index) {
            $scope.classify.forEach(function(item) {
                item.current = false;
            });
            $scope.classify[index].current = true;

            $http.get('tpls/'+$scope.classify[index].url).
                success(function(data, status, headers, config) {
                    $scope.goods = data;
                    // 同步购物车商品数量
                    cartService.syncData($scope.goods);
                }).
                error(function(data, status, headers, config) {

                });
        };
        $scope.changeClassify(0);


        // 切换菜单
//        $scope.changeMenu = function(url) {
//            $http.get('tpls/'+url+'.json').
//                success(function(data, status, headers, config) {
//                    $scope.goods = data;
//                    // 同步购物车商品数量
//                    cartService.syncData($scope.goods);
//                }).
//                error(function(data, status, headers, config) {
//
//                });
//        };
//        $scope.changeMenu('menu1');


        $scope.getCount = function() {
            return cartService.getCount();
        };

        $scope.getPrice = function() {
            return cartService.getPrice();
        };


        $scope.show = function() {

            var dialog = new dialogService.Dialog();
//            dialog.alert({
//                handler4AlertBtn: function() {
//                    alert(1);
//                }
//            });
            dialog.alert();
//            dialog.prompt({
//                content: 'haha'
//            });
            var loading = new loadingService.Loading();

//            loading.show({
//                content: '加载中...'
//            });

            setTimeout(function() {
//                loading.hide();
            }, 2000);

        };

	}]);
});