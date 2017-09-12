var app = angular.module('myMod', ['ngRoute']);
app.config(function($routeProvider, $locationProvider ) {

    $routeProvider
        .when('/home', {
            controller: 'controller1',
            templateUrl: 'views/home.html'
        })

        .otherwise({
          redirectTo: '/home'
        });

    $locationProvider.hashPrefix('');
});
