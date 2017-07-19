var app = angular.module("Gamification");
app.controller("AnimalGame", ["$scope", "$http", function ($scope, $http) {

    var animals = ["cat", "duck", "moose"]
    $scope.input = "";
    $scope.image = "";
    $scope.animal = "test";
    $scope.id = 0;
    $scope.score = 0;
    var oldID = 0;

    $scope.startGame = function () {
        var id = [Math.floor((Math.random() * 3))];
        $scope.id = id;
        $scope.animal = animals[id];
        $scope.image = "/Content/Images/" + $scope.animal + ".jpg";
    }

    $scope.getInput = function () {
        //alert("INOUT " + input);
        var input = $scope.input.toLowerCase();
        if(input==animals[$scope.id])
        {
            alert("Not too crappy (but you still suck)");
            $scope.score++;
            $scope.startGame();
        }
        else
        {
            alert("Nope.");
        }
    }
}]);