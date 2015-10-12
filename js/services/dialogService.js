define(['./module', 'jquery', '../widget'], function (module, $, widget) {
    module.provider('dialogService', [function () {

        var _this = this;
        _this.myCfg = {
            title: '提示',
            content: '请输入内容',
            text4OkBtn: '确定',
            text4CancelBtn: '取消',
            mask4Close: false,

            handler4AlertBtn: null,
            handler4CloseBtn: null,
            handler4ConfirmBtn: null,
            handler4CancelBtn: null,
            handler4PromptBtn: null,

            promptType: 'text',
            promptPlaceHolder: '请输入'
        };

        _this.$get = function() {
            return{
                Dialog: Dialog
            }
        };

        function Dialog(){
            this.cfg = _this.myCfg;
        }

        Dialog.prototype = $.extend({}, new widget.Widget(), {
            renderUI: function() {
                var footerCnt = '';

                switch(this.cfg.type){
                    case 'alert':
                        footerCnt = '<a class="alertBtn" href="javascript:;">'+this.cfg.text4OkBtn+'</a>';
                        break;

                    case 'confirm':
                        footerCnt = '<a class="cancelBtn" href="javascript:;">'+this.cfg.text4CancelBtn+'</a><a class="confirmBtn" href="javascript:;">'+this.cfg.text4OkBtn+'</a>';
                        break;

                    case 'prompt':
                        this.cfg.content += '<div><input placeholder="'+this.cfg.promptPlaceHolder+'" class="promptInput" type="'+this.cfg.promptType+'"/></div>';
                        footerCnt = '<a class="cancelBtn" href="javascript:;">'+this.cfg.text4CancelBtn+'</a><a class="promptBtn" href="javascript:;">'+this.cfg.text4OkBtn+'</a>';
                        break;
                }

                this.boudingBox = $('<div class="mod-dialogMask"><div class="mod-dialog">' +
                    '<div class="inner"><div class="hd">'+ this.cfg.title +'</div>' +
                    '<div class="bd">'+ this.cfg.content +'</div>' +
                    '</div></div></div>');

                if(this.cfg.type != 'common'){
                    this.boudingBox.find('.mod-dialog .inner').append('<div class="ft">'+footerCnt+'</div>');
                }

                this.boudingBox.appendTo(document.body);
                this._promptInput = this.boudingBox.find('.promptInput');
            },

            bindUI: function() {
                var _this = this;

                this.boudingBox.on('click', '.alertBtn', function() {
                    _this.fire('alert');
                    _this.destroy();
                }).on('click', '.confirmBtn', function() {
                    _this.fire('confirm');
                    _this.destroy();
                }).on('click', '.cancelBtn', function() {
                    _this.fire('cancel');
                    _this.destroy();
                }).on('click', '.closeBtn', function() {
                    _this.fire('close');
                    _this.destroy();
                }).on('click', '.promptBtn', function() {
                    _this.fire('prompt', _this._promptInput.val());
                    _this.destroy();
                });


                if(this.cfg.handler4AlertBtn){
                    this.on('alert', this.cfg.handler4AlertBtn);
                }
                if(this.cfg.handler4ConfirmBtn){
                    this.on('confirm', this.cfg.handler4ConfirmBtn);
                }
                if(this.cfg.handler4CancelBtn){
                    this.on('cancel', this.cfg.handler4CancelBtn);
                }
                if(this.cfg.handler4CloseBtn){
                    this.on('close', this.cfg.handler4CloseBtn);
                }
                if(this.cfg.handler4PromptBtn){
                    this.on('prompt', this.cfg.handler4PromptBtn);
                }

                if(this.cfg.mask4Close){
                    this.boudingBox.on('click', function(ev) {
                        if(ev.target.className.indexOf('mod-dialogMask') != -1){
                            _this.fire('close');
                            _this.destroy();
                        }
                    });
                }
            },

            syncUI: function() {
                var $dialog = this.boudingBox.find('.mod-dialog'),
                    t = $dialog.height()/2;

                $dialog.css('marginTop', -t);
            },
            destructor: function() {    // 销毁前
                // 重置cfg
                this.cfg.text4CancelBtn = '取消';
                this.cfg.text4OkBtn = '确定';
                this.cfg.mask4Close = false;
            },

            alert: function(cfg) {
                $.extend(this.cfg, cfg, {type: 'alert'});
                this.render();
                return this;
            },
            confirm: function(cfg) {
                $.extend(this.cfg, cfg, {type: 'confirm'});
                this.render();
                return this;
            },
            prompt: function(cfg) {
                $.extend(this.cfg, cfg, {type: 'prompt'});
                this.render();
                return this;
            },
            common: function(cfg) {
                $.extend(this.cfg, cfg, {type: 'common'});
                this.render();
                return this;
            }
        });

    }]);
});


