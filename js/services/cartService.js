define(['./module'], function (module) {
    module.service('cartService', [function () {
        var service = {};

        service.goods = JSON.parse(localStorage.getItem('__CART__')) || [];

        /**
         * 同步购物车商品数据
         * @param goods 商品数组
         */
        service.syncData = function(goods) {
            var result = [];

            goods.forEach(function(item) {

                service.goods.forEach(function(item2) {
                    if(item.gid == item2.gid){
                        item.num = item2.num;
                        this.push(item);
                    }
                }, result);

            });

            service.goods = angular.copy(result);
        };


        /**
         * 添加商品数量
         * @param gid       商品id
         * @param number    默认加1
         */
        service.plus = function(gid, number, oGoods) {
            var c = this.getGoodsById(gid);
            number = number || 1;

            if(c){
                c.num += number;
                this.save();
            }else{
                var _g = oGoods;
                _g.num++;
                this.goods.push(_g);
                this.save();
            }

            console.log(this.goods);
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
                    c.num -= number;
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

            Array.prototype.forEach.call(this.goods, function(item, index) {
                if(item.gid == gid){
                    result = service.goods[index];
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
            localStorage.setItem('__CART__', JSON.stringify(data));
        };

        return service;
    }]);
});