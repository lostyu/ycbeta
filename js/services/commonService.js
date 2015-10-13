define(['./module'], function (module) {
    module.factory('commonService', [function () {

        var mask = null;

        var common = {
            showMask: function (content, bClose) {
                var _this = this;
                content = content || '';
                bClose = bClose || false;

                if (!mask) {
                    mask = angular.element('<div class="mask">');
                }
                angular.element(document.body).append(mask);

                if(content){
                    mask.append(content);
                }

                if (bClose) {
                    mask.on('click', function () {
                        _this.hideMask();
                    });
                }
            },
            hideMask: function () {
                mask.remove();
                mask.off();
                mask.html('');
            }
        };

        return common;
    }]);
});