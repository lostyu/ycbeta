define(['./module'], function (module) {
    module.directive('goodsCount', ['cartService', function (cartService) {
        return{
            restrict: 'EA',
            replace: true,
            scope: {
                num: '@'
            },
            templateUrl: 'tpls/directive/goodsCountDirective.html',
            link: function (scope, element, attrs) {
                scope.num = attrs.num || 0;

                scope.plus = function(gid) {
                    if(scope.num <= 0){
                        scope.num++;
                        cartService.addGoods(gid)
                    }else{
                        scope.num++;
                        cartService.plus(gid);
                    }

                };

                scope.minus = function(gid) {
                    if(scope.num >= 1){
                        scope.num--;
                        cartService.minus(gid);
                    }
                };
            }
        }
    }]);
});