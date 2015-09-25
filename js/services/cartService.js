define(['./module'], function (module) {
    module.factory('cartService', function () {
        var service = {};

        service.goods = localStorage.getItem('__CART__') || [];


        /**
         * 添加商品到购物车
         * @param oGoods    添加商品
         */
        service.addGoods = function(gid, oGoods) {
            var c = this.getGoodsById(gid);

            if(!c){
                this.goods.push(oGoods);
                this.save();
            }
        };


        /**
         * 添加商品数量
         * @param gid       商品id
         * @param number    默认加1
         */
        service.plus = function(gid, number) {
            var c = this.getGoodsById(gid);
            number = number || 1;

            if(c){
                c.num += number;
                this.save();
            }
        };


        /**
         * 减少商品数量
         * @param gid       商品id
         * @param number    默认减1
         */
        service.minus = function(gid, number) {
            var c = this.getGoodsById(gid);
            number = number || 1;

            if(c){
                if(c.num - number <= 0){
                    this.remove(gid);
                }else{
                    c.num -= number;
                    this.save();
                }
            }
        };


        /**
         * 获取商品总数量
         */
        service.getCount = function() {
            var result = 0;

            Array.prototype.forEach.call(this.goods, function(item) {
                result += item.num;
            });

            return result;
        };


        /**
         * 获取商品总价
         */
        service.getPrice = function() {
            var result = 0;

            Array.prototype.forEach.call(this.goods, function(item) {
                result += item.num * item.price;
            });

            return result;
        };


        /**
         * 通过商品id获取商品
         */
        service.getGoodsById = function(gid) {
            var result = '';

            Array.prototype.forEach.call(this.goods, function(item) {
                if(item.gid == gid){
                    result = item;
                    return false;
                }
            });

            return result;
        };


        /**
         * 删除商品
         * @param gid       商品id
         */
        service.remove = function(gid) {
            var _this = this;
            Array.prototype.forEach.call(this.goods, function(item, index) {
                if(item.gid == gid){
                    _this.goods.splice(index, 1);
                    _this.save();
                    return false;
                }
            });
        };


        /**
         * 保存到localStorage
         */
        service.save = function() {
            var data = angular.copy(this.goods);
            localStorage.setItem('__CART__', data);
        };

        return service;
    });
});