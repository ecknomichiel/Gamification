var app = angular.module("Gamification");


app.controller("ColorGameCr", ["$scope", "$http", function ($scope, $http) {
    $scope.color = " Text Color!";
    $scope.points = 0;                                                                 //Score
    var colors = ["Blue", "Yellow", "Red", "Green", "Black", "Brown", "Gray", "Magenta"];
    
    //alert(tal + " : " +color[tal]);
    

    $scope.getNextColour = function () {
        var tal = Math.floor((Math.random() * 8));
        $scope.color = colors[tal];
        $scope.message = "";

    }

    $scope.myFunc = function (color) {
        if (color == $scope.color) {
            // alert("correct!");
            $scope.points++;
            //Score
            $scope.getNextColour();
        }
        else {
            $scope.message = "Incorrect, this was " + color + " please try again.";
        }

            
 
    };

    $scope.getNextColour();

}]);








