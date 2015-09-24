define(['./module'], function (module) {
    module.factory('cartService', function () {
		var num = 0;
        var service = {};

        service.goods = localStorage.getItem('__CART__') || [];

        service.plusGoods = function() {
    		
        };

        service.minusGoods = function() {
        	
        };

        service.total = function() {

        };

        return service;
    });
});