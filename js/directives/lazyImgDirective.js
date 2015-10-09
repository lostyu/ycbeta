define(['./module'], function (module) {
    module.directive('lazyImg', [function () {
        return{
            restrict: 'A',
            link: function (scope, element, attrs) {

                console.log(element.find(document.querySelectorAll('.j-lazyImg')));

                element.on('scroll', function() {
                    console.log(2);
                });

            }
        }
    }]);
});