    var app = angular.module("Game2", []);

    app.controller("WordSentenceGame", ["$scope", "$http", function ($scope, $http) {
        $scope.WordSentence = "TestGame!";
    }]);