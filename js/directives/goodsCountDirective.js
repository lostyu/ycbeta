define(['./module'], function (module) {
    module.directive('goodsCount', function () {
        return{
            restrict: 'EA',
            replace: true,
            scope: {
                num: '@'
            },
            templateUrl: 'tpls/directive/goodsCountDirective.html',
            link: function (scope, element, attrs) {
                scope.num = attrs.num;


            }
        }
    });
});