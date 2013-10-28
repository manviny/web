/* Controllers */

function MainCtrl($scope, $http) {

	$scope.world = "World";

	$http({	
			method: 'POST', 
			url: 'http://yourUrl/some.json'
		}).success(function(data)
	{
		$scope.items = data.matches; // response data 
	});


}