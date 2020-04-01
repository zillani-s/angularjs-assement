var app = angular.module('app', [ "ui.router" ]); 
app.config(function($stateProvider, $locationProvider,  
    $urlRouterProvider) { 

        $urlRouterProvider.otherwise("/home"); 

// creating routes or states 
    $stateProvider.state('register', {  
        url : '/register', 
        templateUrl : "register.html", 
        controller : "regCtrl"
    })
});
// Redirect to home page if url does not  
// matches any of the three mentioned above 

app.controller('regCtrl', [ '$scope','$http', function($scope, $http) {
    console.log("regCtrl");
    // $scope.value = "Welcome to home";
    // $scope.show = false;
    
    // $scope.click = function() {
        
    //     $scope.show = true;
        
        
    // }
    
    
    // $scope.getAllMenuItems = function() {
    //     var responsePromise = $http.get("http://dummy.restapiexample.com/api/v1/employees", {
    //         headers : {
    //             'Content-Type' : 'application/json'
    //         },
    //     });
    //     responsePromise.then(successCallback, errorCallback);
    //     function successCallback(response) {
    //         // success code
    //         console.log("response "+response.data);
    //         $scope.users = response.data.data;
    //         console.log($scope.users);
            
    //     }
    //     function errorCallback(error) {
    //         // error code
    //         alert(error);

    //     }
    // }
    // $scope.getAllMenuItems();


    console.log();
} ]);