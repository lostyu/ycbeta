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
                scope.num = attrs.num;

                scope.plus = function() {
                    scope.num++;
                    cartService.plusGoods();
                };

                scope.minus = function() {
                    if(scope.num >= 1){
                        scope.num--;
                    }
                };
            }
        }
    }]);
});