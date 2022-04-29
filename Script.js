//to create the controller we have to initilize it to a variable.
var myApp=angular.module("mymodule",[]);
myApp.controller("myController",function($scope){
//rootScope is a global variable
$scope.value=10;
});

