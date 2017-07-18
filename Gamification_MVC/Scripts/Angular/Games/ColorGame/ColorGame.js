var app = angular.module("Game4", []);


app.controller("ColorGameCr", ["$scope", "$http", function ($scope, $http) {
    $scope.color = " Text Color!";
    var color = ["Blue ", "Green", "Red", "Black", "Yellow "];

    $scope.myFunc = function (color) {
        if (color == 'blue') alert("correct!");
        if (color == 'yellow') alert("correct!");
        if (color == 'red') alert("correct!");
        if (color == 'green') alert("correct!");
        if (color == 'black') alert("correct!");

        else alert("Wrong!");

        $scope.count++;
    };

}]);








