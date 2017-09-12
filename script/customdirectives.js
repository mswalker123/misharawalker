var app = angular.module('myMod');

app.directive('headerAnimationContent', function(){
  return{
    restrict:'ECM',
    replace: false,
    templateUrl:"partials/headeranimation.html"
  };
});
