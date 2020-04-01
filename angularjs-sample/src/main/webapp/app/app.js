var myApp = angular.module('reg', [ 'ui.router' ]);
myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
	//$urlRouterProvider.otherwise('/index');
	
	$stateProvider.state('registration', {
		url : '/registration',
		templateUrl : "registration.html",
		controller : "registrationCtrl"
	}),
//	$stateProvider.state('login',{
	//	url : '/login',
	//	templateUrl : "login.html",
	//	controller : "loginCtrl"
//	}),
	
	$stateProvider.state('users',{
		url : '/users',
		templateUrl : "table.html",
		controller : "userCtrl"
	});
});

myApp.controller('registrationCtrl', [ '$scope', '$http', function($scope, $http) {
	console.log("registrationCtrl");
	$scope.value = "Registered successfully";
	$scope.submit = function() {
		$http.post("http://localhost:8080/angularjs-sample/rest/angularjs/addUsers", $scope.user).then(
				function successCallback(response) {
					console.log("response::", response)
				},
				function errorCallback(response) {
					console.log("Unable to perform post request");
				}
		);
		alert("click ok to submit data");
		alert(JSON.stringify($scope.user));	
	};
	
}]);

// myApp.controller('loginCtrl', [ '$scope', '$http', function($scope, $http) {
//	console.log("loginCtrl");
//	$scope.value = "Welcome Back";
//	$scope.submit = function() {
//		$state.go('users');	
//	};
// }]);

myApp.controller('userCtrl', [ '$scope', '$http', '$state', function($scope,$http, $state) {
	$scope.show = true;
	$http.get("http://localhost:8080/angularjs-sample/rest/angularjs/getUsers").then(
		      function successCallback(response) {
		        console.log("response::", response);
	      	    $scope.user = (response && response.data && response.data.menuItems) ? response.data.menuItems : [];
	      	    console.log($scope.user)
		      },
		      function errorCallback(response) {
		        console.log("Unable to perform get request");
		      }
		    );
}]);

