//Tutorial On How To Add An Angular Script
//
//1. Add a new js file inside Games folder
//2. In the BundleConfig.cs file inside App_Start , You have to add "~/Scripts/Angular/Games/YOURSCRIPT.js" on the angular bundle
//3. var app is needed for each angular file, else it will be an error.
//4. Create your controller and use it.
var app = angular.module("Gamification", []);

app.controller("TestController", ["$scope", "$http", function ($scope, $http) {
    $scope.data = "Hello my friend";
}]);