/* Controllers */

function MainCtrl($scope, $http) {

	$scope.world = "World";

	// fetch data from server
	$http({	
			method: 'POST', 
			url: 'http://yourUrl/some.json'
		}).success(function(data)
	{
		$scope.items = data.matches; // response data 
	});

}