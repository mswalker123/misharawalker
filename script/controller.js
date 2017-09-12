var app = angular.module('myMod');

app.controller('controller1', function($scope, $location, $anchorScroll) {

    $scope.scrollTo = function(id) {
    $anchorScroll(id);
    }
});
