/* Controllers */

function MainCtrl($scope, $http) {
	require(['config'], function(config){
		// fetch data from server
		$http({	
			method: 'POST', 
			url: config.mascotas
		}).success(function(data)
		{
			$scope.items = data.matches; // response data 
		});
	});
}