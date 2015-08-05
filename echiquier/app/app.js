var app = angular.module("echiquier", ['ngRoute','ngAnimate', 'colorpicker.module']);

app
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                controller: 'echecController',
                templateUrl: './app/views/home.html'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);