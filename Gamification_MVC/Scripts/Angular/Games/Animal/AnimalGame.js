var app = angular.module("Game1", []);

app.controller("AnimalCr", ["$scope", "$http", function ($scope, $http) {
    $scope.animal = "Unicorn test!";
}]);