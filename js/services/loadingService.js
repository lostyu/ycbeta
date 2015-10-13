define(['./module', 'jquery', '../widget'], function (module, $, widget) {
    module.provider('loadingService', [function () {

        var _this = this;

        _this.cfg = {
            type: 1,        // loading类型默认值
            content: ''
        };

        _this.$get = function() {
            return{
                Loading: Loading
            }
        };

        function Loading() {
            this.cfg = _this.cfg;
        }

        Loading.prototype = $.extend({}, new widget.Widget(), {
            renderUI: function() {
                var _loadingHtml = '';

                switch (this.cfg.type){
                    case 1:
                        _loadingHtml = '<div class="load1"><div class="loader"></div></div>';
                        break;

                    case 2:
                        _loadingHtml = '<div class="load2"><div class="loader">'+
                            '<div class="rect1"></div>'+
                            '<div class="rect2"></div>'+
                            '<div class="rect3"></div>'+
                            '<div class="rect4"></div>'+
                            '<div class="rect5"></div>'+
                            '<div class="rect6"></div>'+
                            '</div></div>';
                        break;
                }

                this.boudingBox = $('<div class="mod-loadingMask">'+
                    '<div class="mod-loading">'+
                    '<div class="bd">'+_loadingHtml+'</div></div></div>');

                if(this.cfg.content){
                    this.boudingBox.find('.mod-loading').append('<div class="ft">'+this.cfg.content+'</div>');
                }

                this.boudingBox.appendTo(document.body);
            },
            bindUI: function() {},
            syncUI: function() {
                var _loadingBox = this.boudingBox.find('.mod-loading'),
                    t = _loadingBox.height()/2;

                _loadingBox.css('marginTop', -t);
            },
            destructor: function() {},

            show: function(cfg) {
                $.extend(this.cfg, cfg);
                this.render();
                return this;
            },
            hide: function() {
                this.destroy();
            }
        });

    }]);
});


