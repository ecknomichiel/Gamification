var app = angular.module("Gamification");
app.controller("AnimalGame", ["$scope", "$http", function ($scope, $http) {

    var animals = ["cat.jpg", "duck.jpg", "moose.jpg"]


    $scope.animal = "test";
    $scope.score = 0;


    var nr = [Math.floor((Math.random() * 3))];
    $scope.score = nr;
    $scope.animal = animals[nr];
    $scope.image = "/Content/Images/" + $scope.animal;
    alert($scope.animal);

    $scope.test = function () {
        alert("Test");
    }
}]);