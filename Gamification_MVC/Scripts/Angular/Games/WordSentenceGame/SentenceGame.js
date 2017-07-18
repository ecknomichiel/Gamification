﻿/*
    Unfinnished game - but the directive is working

    the element containing the new tag <wordbutton text=""></wordbutton> must have ng-controller="WordSentenceGame"
*/
//Global variables
var WordList = ["Hello", "My", "Name", "Is", "Kalle", "And", "I", "Am", "Eleven", "Years", "Old"]; //All words
var CorrectSentence = [WordList, ["Hello", "My", "Name", "Is", "Kalle"], ["I", "Am", "Eleven", "Years", "Old"], ["Hello", "I", "Am", "Eleven", "Years", "Old"], ["I", "Am", "Kalle"], ["Hello", "I", "Am", "Eleven", "Years", "Old", "And", "I", "My", "Name", "Is", "Kalle"]];

var WordTaken = []; //User result
var Points = 0;
var start = false;

//Game module, Containing a directive for the tag <wordbutton text="A text inside the button"></wordbutton>
var app = angular.module("Game2", []).directive('wordbutton', function ($compile) {
    return {
        restrict: 'E', //I'm a little confused with what each restriction does, but it's a learning process
        scope: { // - The custom attribute for the wordbutton - takes everything
            text: '@'
        },
        template: '<button ng-click="add()">{{text}}</button><br>', // The template for the <wordbutton> tag - results a button, instead of text
        controller: function ($scope, $element) {
            $scope.add = function () { //the add function called by ng-click
                if (start == false) {
                    shuffle(WordList); //Randomize all words
                    for (var i = 0; i < WordList.length; i++) { //Generate all words as buttons
                        var button = $compile('<button name="Word" ng-controller="WordSentenceGame" ng-click="takeword(' + "'" + WordList[i] + "'" + ')">{{WordSentence[' + i + ']}}</button>')($scope); //Compile the code.
                        $element.parent().append(button); //We want to append the child to our parent element, so that it's visible

                    }
                    start = true;
                    document.getElementById("GameBody").removeChild(document.getElementById("startbutton"));
                }
            };
        }
    };
}).directive('finnishedbutton', function ($compile) {
    return {
        restrict: 'E', //I'm a little confused with what each restriction does, but it's a learning process
        scope: { // - The custom attribute for the wordbutton - takes everything
            text: '@'
        },
        template: '<button ng-click="finnished()">{{text}}</button><br>', // The template for the <wordbutton> tag - results a button, instead of text
        controller: function ($scope, $element) {
            $scope.finnished = function () { //the finnished function called by ng-click
                for (var i = 0; i < CorrectSentence.length; i++) {
                    if (CorrectSentence[i].equals(WordTaken)==true) {
                        Points++;
                    }
                };
                WordTaken = [];
                document.getElementById("sentence").innerText = WordTaken;
                document.getElementById("Score").innerHTML = "Points: " + Points;
            };
        }
    };
});
    //Main controller for the game
    app.controller("WordSentenceGame", ["$scope", "$http", function ($scope, $http) {
 
        //All Words, added to a scope variable
        $scope.WordSentence = WordList;
        //The user pressed a word button and the word is added to an array
        $scope.takeword = function ($id) {
            WordTaken.push($id);
            document.getElementById("sentence").innerText=WordTaken;
        };
        $scope.score = "Points: "+Points;
}]); //before ; you can add a new directive
    function shuffle(array) { //shuffle function can take an array and make randomize it
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        
        return array;
    }
    // attach the .equals method to Array's prototype to call it on any array
    Array.prototype.equals = function (array) {
        // if the other array is a falsy value, return
        if (!array)
            return false;

        // compare lengths - can save a lot of time 
        if (this.length != array.length)
            return false;

        for (var i = 0, l = this.length; i < l; i++) {
            // Check if we have nested arrays
            if (this[i] instanceof Array && array[i] instanceof Array) {
                // recurse into the nested arrays
                if (!this[i].equals(array[i]))
                    return false;
            }
            else if (this[i] != array[i]) {
                // Warning - two different object instances will never be equal: {x:20} != {x:20}
                return false;
            }
        }
        return true;
    }
    // Hide method from for-in loops
    Object.defineProperty(Array.prototype, "equals", { enumerable: false });