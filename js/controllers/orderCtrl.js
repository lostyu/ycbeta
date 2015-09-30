define(['./module'], function(module) {
	module.controller('orderCtrl', ['$scope', function($scope) {
		$scope.title = 'index';
        $scope.showDetail = false;

        $scope.toggleDetail = function() {
            $scope.showDetail = !$scope.showDetail;
        };

        $scope.save = function() {
            var text = angular.element(document.querySelector('.iptText')).val();

            if(text.length == 0){
                alert('写点什么');
            }else{
                $scope.toggleDetail();
            }
        };

	}]);
});