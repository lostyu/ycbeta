define(['./module'], function (module) {
    module.directive('goodsCount', ['cartService', function (cartService) {
        return{
            restrict: 'EA',
            replace: true,
            scope: {
                gid: '@',
                num: '@',
                goods: '='
            },
            templateUrl: 'tpls/directive/goodsCountDirective.html',
            link: function (scope, element, attrs) {
                scope.plus = function() {
                    scope.num++;
                    cartService.plus(scope.gid, 1, scope.goods);
                };

                scope.minus = function() {
                    scope.num--;
                    cartService.minus(scope.gid);
                }
            }
        }
    }]);
});