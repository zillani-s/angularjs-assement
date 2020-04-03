var myApp= angular.module('sample', [ 'ui.router' ]);


myApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/form');


	$stateProvider.state('form', {
		url : '/form',
		templateUrl : 'view/registerform.html',
		controller : 'registerCtrl'
	}),
	$stateProvider.state('details', {
		url : '/details',
		templateUrl : 'view/details.html',
		controller : 'detailsCtrl'
	})
	
});

myApp.controller('registerCtrl', [ '$scope','$http', function($scope,$http) {

	$scope.submit =function(){
		$http.post('http://localhost:8080/angularjs-sample/rest/angularjs/addUsers',{
	'userName': $scope.userName,
	'jobTitleName': $scope.jobTitleName,
	'firstName': $scope.firstName,
	'lastName':$scope.lastName,
	'preferredFullName':$scope.preferredFullname,
	'employeeCode': $scope.employeeCode,
	'region': $scope.region,
	'phoneNumber': $scope.phonenumber,
	'email': $scope.email
	}	)
	

	}
//	.alert("userName:" +$scope.userName +",jobTitleName:"+ $scope.jobTitleName+",firstName:"+ $scope.firstName+",lastName:"+$scope.lastName+"preferredFullName:"+$scope.preferredFullname+
//			",employeeCode:"+ $scope.employeeCode+",region:"+ $scope.region+
//			",phoneNumber:"+ $scope.phonenumber+
//			",email:"+ $scope.email);
			
		
	  }]);

	myApp.controller('detailsCtrl',[ '$scope','$http', function($scope, $http) {
	console.log("detailsCtrl");
	$scope.users=[];
	$http({
		method: "GET",
	    url:'http://localhost:8080/angularjs-sample/rest/angularjs/getUsers'
	})
	.then(function  successCallback(response){
		$scope.users=response.data.menuItems;
		
	}
	);
} ]);


