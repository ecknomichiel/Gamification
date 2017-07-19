var app = angular.module("Gamification");

app.controller("PunctuationGameController", ["$scope", "$http", function ($scope, $http) {
    $scope.sentences = ["Unicorn tests are the best!", 
        "I would like to have another sentence. One that has other puctuation marks in it.",
        "A subordinated clause is a clause that has no meaning if you take away its best friend, the main clause.",
    "Sometimes you would like to give an example, such as: 'this is an exampe'."];
    $scope.getRandomSentence = function (){
        idx = Math.floor(Math.random() * $scope.sentences.length);

        result = $scope.sentences[idx];
        return result;
    };

    $scope.getNextQuestion = function () {
        idx = Math.floor(Math.random() * $scope.sentences.length);
        $scope.currentSentence = $scope.sentences[idx];
        $scope.sentences.delete
        $scope.currentQuestion = $scope.currentSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "*");
    };



    $scope.currentSentence = $scope.getRandomSentence();
    $scope.score = 0;
}]);