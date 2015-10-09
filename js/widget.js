define(['jquery'], function($) {
    function Widget(){
        this.boudingBox = null;         //外层容器
    }

    Widget.prototype = {
        on: function(type, handler) {
            if(typeof this.handlers[type] == 'undefined'){
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this;
        },

        fire: function(type, data) {
            if(this.handlers[type] instanceof Array){
                var handlers = this.handlers[type];

                for(var i=0,len=handlers.length;i<len;i++){
                    handlers[i](data);
                }
            }
        },

        render: function(container) {    //渲染组件
            this.renderUI();
            this.handlers = {};
            this.bindUI();
            this.syncUI();
            $(container||document.body).append(this.boudingBox);
        },

        destroy: function() {           //销毁组件
            this.destructor();
            this.boudingBox.off();
            this.boudingBox.remove();
        },

        renderUI: function() {},        //加载dom
        bindUI: function() {},          //监听事件
        syncUI: function() {},          //初始化属性
        destructor: function() {}       //销毁前
    };

    return{
        Widget: Widget
    }
});