define(['./module'], function (module) {
    module.factory('commonService', [function () {
        var common = {};

        common.mask = null;

        common.showMask = function(bClose) {
            var _this = this;

            if(!this.mask){
                this.mask = angular.element('<div class="mask">');
            }
            angular.element(document.body).append(this.mask);

            if(bClose){
                this.mask.on('click', function() {
                    _this.destroyMask();
                });
            }
        };
        common.destroyMask = function() {
            this.mask.remove();
            this.mask.off();
            this.mask.html('');
        };


        return common;
    }]);
});