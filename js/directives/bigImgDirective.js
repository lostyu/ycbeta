define(['./module'], function (module) {
    module.directive('bigImg', ['commonService', function (commonService) {
        return{
            restrict: 'A',
            scope: {
                bigImg: '='
            },
            link: function (scope, element, attrs) {

                element.bind('click', function() {
                    var _des = scope.bigImg.des == undefined ? '' : '<p class="des">'+scope.bigImg.des+'</p>';
                    var _img = '<div class="bigImgBox"><img src="'+ scope.bigImg.imgUrl +'" /><p>'+  scope.bigImg.title +'</p>'+_des+'</div>';

                    commonService.showMask(true);
                    commonService.mask.append(_img);
                });

            }
        }
    }]);
});