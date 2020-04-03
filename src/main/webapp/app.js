var myApp = angular.module('myApp', ['ui.router']);


myApp.config(function ($stateProvider) {
	var loginState = {
		name: 'login',
		url: '/login',
		templateUrl: "resources/html/login.html"
	}
	var listState = {
		name: 'list',
		url: '/list',
		templateUrl: "resources/html/list.html"
	}


	$stateProvider.state(loginState);
	$stateProvider.state(listState);

});



myApp.controller('loginController', function ($scope, $http) {


	$scope.update = function () {

		alert(JSON.stringify($scope.user));
		$http({
			method: "POST",
			url: "http://localhost:8080/angularjs-sample/rest/angularjs/addUsers",
			data: angular.toJson($scope.user),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		$scope.reset();
	};

	$scope.reset = function () {
		$scope.user = {};
		$scope.myform.$setPristine();
	};
});

myApp.controller('listController', function ($scope, $http) {
	$scope.employees = null;
	$http.get("http://localhost:8080/angularjs-sample/rest/angularjs/getUsers").then(function(response){$scope.employees=response.data;});
	console.log($scope.employees);
});
