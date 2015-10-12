define(['./module'], function (module) {
    module.provider('testService', [function () {


            this.cfgText = '';

            this.sayHi = function() {
                alert('hi'+this.cfgText);
            };

            this.$get = function() {
                return{
                    cfg: this.cfgText,
                    say: this.sayHi
                }
            }


    }]);
});


