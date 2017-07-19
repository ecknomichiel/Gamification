var app = angular.module("Gamification");

app.controller("PunctuationGameController", ["$scope", "$http", function ($scope, $http) {
    sentences = ["Unicorns are the best!", 
        "I would like to have another sentence. One that has other puctuation marks in it.",
        "A subordinated clause is a clause that has no meaning if you take away its best friend, the main clause.",
    "Sometimes you would like to give an example, such as: 'this is an exampe'.",
    "To be or not to be; that is the question.",
    "Is there no question in this quiz?"];
    $scope.questionnaire = $scope.sentences;
    $scope.getRandomSentence = function (){
        idx = Math.floor(Math.random() * $scope.sentences.length);

        result = sentences[idx];
        return result;
    };

    $scope.getNextQuestion = function () {
        if ($scope.questionnaire.length == 0) {
            $scope.currentSentence = "";
            $scope.message = "All questions answered. You got " + $scope.score + " out of " + sentences.length + " right.";
        }
        idx = Math.floor(Math.random() * $scope.questionnaire.length);
        $scope.currentSentence = $scope.questionnaire[idx];
        $scope.questionnaire.splice(idx, 1);
        $scope.answer = $scope.currentSentence.replace(/[.,\/#!$%\^&\*;:{}=?\-_`~()]/g, "*");
    };

    $scope.start = function () {
        $scope.questionnaire = sentences.slice();
        $scope.score = 0;
        $scope.getNextQuestion();
    };

    $scope.checkAnswer = function () {
        if ($scope.currentSentence == $scope.answer)
        {
            $scope.message = "Correct";
            $scope.score++;
        }
        else
        {
            $scope.message = "Incorrect. The right answer was: " + $scope.currentSentence;
        }
        $scope.getNextQuestion();
    };

    $scope.start();
}]);