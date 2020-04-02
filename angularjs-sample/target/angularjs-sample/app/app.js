var app = angular.module('app', [ "ui.router",]); 
app.config(function($stateProvider, $locationProvider,  
    $urlRouterProvider) { 

        $urlRouterProvider.otherwise("/login"); 

// creating routes or states 
   $stateProvider.state('login', {
        url : '/login', 
        templateUrl : "login.html", 
        controller : "loginCtrl"
    });
    $stateProvider.state('form', {  
        url : '/form', 
        templateUrl : "form.html", 
        controller : "formCtrl"
    }),
    $stateProvider.state('table', {  
        url : '/table', 
        templateUrl : "table.html", 
        controller : "tableCtrl"
    })
});
// Redirect to home page if url does not  
// matches any of the three mentioned above 


// create empty controllers for the states as we are 
// not doing anything but just displaying message 
    //  alert("Hello World");
app.controller('loginCtrl',['$scope', function($scope){
	alert("login");
}]);

    
    app.controller('formCtrl',[ '$scope','$http', function($scope, $http) {
     $scope.value = "Welcome to form";
    alert(" data");
    $scope.submit= function() {
    
    	$http.post("http://localhost:8080/angularjs-sample/rest/angularjs/addUsers",  {'userId':  $scope.userId,
            'jobTitleName':  $scope.jobTitleName,
            'firstName':    $scope.firstName,
            'lastName':  $scope.lastName,
            'preferredFullName':$scope.preferredFullname,
            'employeeCode':  $scope.employeeCode,
            'region':  $scope.region,
            'phoneNumber':  $scope.phoneNumber,
            'email': $scope.email  })
 
        .success(function(data){
        	 console.log("Data Inserted Successfully");
        	 alert("sucess");
        	 $scope.userId=null;
        	  $scope.jobTitleName=null;
            $scope.firstName=null;
              $scope.lastName=null;
             $scope.preferredFullname=null;
               $scope.employeeCode=null;
               $scope.region=null;
             $scope.phoneNumber=null;
             $scope.email=null;
            
 });
  }
   
 /*$scope.displayData=function(){
	  $http.get("http://localhost:8080/angularjs-sample/rest/angularjs/getUsers")
	  .sucess(function(data){
		  $scope.users=data;
		  alert(data);
	  });
 }  
*/  
      $scope.reset=function(){
            	  alert("resetdone");
              }
 } ]);

    app.controller('tableCtrl', [ '$scope', '$http', function($scope ,$http) {
        console.log("tableCtrl");
        alert("data");
        
        
     	 $http.get('http://localhost:8080/angularjs-sample/rest/angularjs/getUsers').then(function(d){
      		  $scope.users=d.data; },function(error) {
      		  alert('failed');
      		  
      	  });
          
  	
   
        	
    } ]);
