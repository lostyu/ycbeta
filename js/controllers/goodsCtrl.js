define(['./module'], function(module) {
	module.controller('goodsCtrl', ['$scope', 'cartService', function($scope, cartService) {
		$scope.title = 'index';

        $scope.goods = [
            {
                "gid": "01",
                "title": "1双球冰淇淋（香草、抹茶、巧克力）",
                "price": 28,
                "originPrice": 58,
                "num": 0
            },
            {
                "gid": "02",
                "title": "222双球冰淇淋（香草、抹茶、巧克力）",
                "price": 38,
                "originPrice": 48,
                "num": 0
            },
            {
                "gid": "03",
                "title": "333双球冰淇淋（香草、抹茶、巧克力）",
                "price": 18,
                "num": 0
            }
        ];


        $scope.goods.forEach(function(item) {
            cartService.goods.forEach(function(item2) {
                if(item.gid == item2.gid){
                    angular.extend({}, item, item2);
                }
            })
        });

        $scope.getGoodsById = function(gid) {
            var result = null;

            $scope.goods.forEach(function(item) {
                if(item.gid == gid){
                    result = item;
                    return false;
                }
            });

            return result;
        }


	}]);
});