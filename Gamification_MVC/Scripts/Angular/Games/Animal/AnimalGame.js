//(function () {
//    var app = angular.module("Game1", []);
//    app.controller("AnimalGame", ["$scope", "$http", function ($scope, $http) {
        
//        var animals = ["cat.jpg", "duck.jpg", "moose.jpg"]


//        $scope.animal = "test";
//        $scope.score = 0;


//            var nr = [Math.floor((Math.random() * 3))];
//            $scope.score = nr;
//            $score.animal = animals[nr];
//            $scope.image = "/Content/" + $scope.animal;
//            alert($scope.animal);

//        $scope.test = function () {
//            alert("Test");
//        }
//    }])
//});

//(function () {
//    var app2 = angular.module("testApp2", []);

//    app2.controller("testCon", ['$scope', function ($scope) {
//        alert("test");
//        $scope.animal = "cat";

//    }])
//})();

(function () {
    var app = angular.module("Gamification");

    app.controller("testCon", ['$scope',
        function ($scope) {
            $scope.animal = "Home";
            $scope.description = "This is the home page, presented by angular routing";
        }])
    /*app.controller('testCon', ['$scope', function ($scope) {
alert('test');
$scope.animal = "cat";
               }]);*/
})();