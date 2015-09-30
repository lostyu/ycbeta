define(['./module'], function(module) {
	module.controller('goodsCtrl', [
        '$scope', 'cartService', '$http', function($scope, cartService, $http) {

		$scope.title = '商品列表';

        $scope.goods = [];

        // 设置标题
        document.title = $scope.title;

        // 切换菜单
        $scope.changeMenu = function(url) {
            $http.get('tpls/'+url+'.json').
                success(function(data, status, headers, config) {
                    $scope.goods = data;
                    // 同步购物车商品数量
                    cartService.syncData($scope.goods);
                }).
                error(function(data, status, headers, config) {

                });
        };
        $scope.changeMenu('menu1');




        $scope.getCount = function() {
            return cartService.getCount();
        };

        $scope.getPrice = function() {
            return cartService.getPrice();
        };

	}]);
});