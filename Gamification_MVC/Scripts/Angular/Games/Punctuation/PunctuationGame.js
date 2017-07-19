var app = angular.module("Gamification");

app.controller("PunctuationGameController", ["$scope", "$http", function ($scope, $http) {
    $scope.sentences = ["Unicorn tests are the best!", 
        "I would like to have another sentence. One that has other puctuation marks in it.",
        "A subordinated clause is a clause that has no meaning if you take away its best friend, the main clause.",
    "Sometimes you would like to give an example, such as: 'this is an exampe'."];
    $scope.getRandomSentence = function (){
        idx = Math.floor(length($scope.sentences));
        return $scope.sentences[idx];
    };
    $scope.currentSentence = getRandomSentence();
    $scope.score = 0;
}]);