var app = angular.module("Game4", []);


app.controller("ColorGameCr", ["$scope", "$http", function ($scope, $http) {
    $scope.color = " Text Color!";
    var colors = ["Blue", "Yellow", "Red", "Green", "Black", "Brown", "Gray", "Magenta"];
    var tal = Math.floor((Math.random() * 8));
    //alert(tal + " : " +color[tal]);
    $scope.color = colors[tal];

    $scope.myFunc = function (color) {
        if (color == $scope.color)
            alert("correct!");
        else alert("Wrong!");
 
    };

}]);








