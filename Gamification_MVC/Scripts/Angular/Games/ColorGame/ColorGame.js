var app = angular.module("Gamification");


app.controller("ColorGameCr", ["$scope", "$http", function ($scope, $http) {
    $scope.color = " Text Color!";
    $scope.points = 0;                                                                 //Score
    var colors = ["Blue", "Yellow", "Red", "Green", "Black", "Brown", "Gray", "Magenta"];
    var tal = Math.floor((Math.random() * 8));
    //alert(tal + " : " +color[tal]);
    $scope.color = colors[tal];

    $scope.myFunc = function (color) {
        if (color == $scope.color) {
            alert("correct!");
            $scope.points++;                                                    //Score
        }
        else alert("Wrong!");
 
    };

}]);








