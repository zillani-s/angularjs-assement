var app = angular.module('reg', [ "ui.router"]); 
app.config(function($stateProvider, $locationProvider,  $urlRouterProvider) { 

//        $urlRouterProvider.otherwise("/register"); 

// creating routes or states 
    $stateProvider.state('register', {  
        url : '/register', 
        templateUrl : "register.html", 
        controller : "regCtrl"
    });
    $stateProvider.state('login', {  
        url : '/login', 
        templateUrl : "login.html", 
        controller : "logCtrl"
    });
    $stateProvider.state('userList', {  
        url : '/userList', 
        templateUrl : "table.html", 
        controller : "userListCtrl"
    });
    $stateProvider.state('users', {  
        url : '/users', 
        templateUrl : "table.html", 
        controller : "usersCtrl"
    });
});

    app.controller('regCtrl', [ '$scope', '$http', function($scope,$http) {
    	
    	console.log("regCtrl"); 
    	$scope.value = "you registered successfully";
    	$scope.submit = function() {
    		$http.post("http://localhost:8080/angularjs-sample/rest/angularjs/addUsers", $scope.user).then(
		      function successCallback(response) {
		        console.log("response::", response)
		      },
		      function errorCallback(response) {
		        console.log("Unable to perform post request");
		      }
    		);
    		alert("are you want to submit data");
    		alert(JSON.stringify($scope.user));
    		
    	};
    }] 	);
    app.controller('logCtrl', [ '$scope', '$http', '$state', function($scope,$http, $state) {
    		
    		console.log("logCtrl");
    		$scope.submit = function() {
        		//TODO:: check if the user is valid
//        		$http.get("http://localhost:8080/angularjs-sample/rest/angularjs/getUsers").then(
//    			      function successCallback(response) {
////    			    	console.log("response::", response);
//    		      		var users = (response && response.data && response.data.menuItems) ? response.data.menuItems : [];
//    		      		console.log($scope.emp)
//    			      },
//    			      function errorCallback(response) {
//    			        console.log("Unable to perform get request");
//    			      }
//    			    );
//        		
        		$state.go('userList');
    		
    		};
    }]);
    	
    	app.controller('userListCtrl', [ '$scope', '$http', '$state', function($scope,$http, $state) {
    		$scope.show = true;
    		$http.get("http://localhost:8080/angularjs-sample/rest/angularjs/getUsers").then(
    			      function successCallback(response) {
   			    	console.log("response::", response);
    		      		$scope.emp = (response && response.data && response.data.menuItems) ? response.data.menuItems : [];
    		      		console.log($scope.emp)
    			      },
    			      function errorCallback(response) {
    			        console.log("Unable to perform get request");
    			      }
    			    );
    		
    		
    	}]);

    	app.controller('usersCtrl', [ '$scope', '$http', '$state', function($scope,$http, $state) {
    		$scope.show = true;
    		$http.get("http://localhost:8080/angularjs-sample/rest/angularjs/getUsers").then(
    			      function successCallback(response) {
   			    	console.log("response::", response);
    		      		$scope.emp = (response && response.data && response.data.menuItems) ? response.data.menuItems : [];
    		      		console.log($scope.emp)
    			      },
    			      function errorCallback(response) {
    			        console.log("Unable to perform get request");
    			      }
    			    );
    		
    		
    	}]);
    	
//    var url = 'posturl', data = 'parameters',config='contenttype';
//
//    $http.post(url, data, config).then(function (response) {
//
//    // This function handles success
//
//    }, function (response) {

    // this function handles error 
//});