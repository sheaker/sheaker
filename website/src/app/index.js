'use strict';

angular.module('sheaker', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ui.bootstrap'])
  .constant('VERSION', 'version dev')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
       .when('/gymnasium', {
            templateUrl: 'app/gymnasium/gymnasium.html',
            controller: 'GymnasiumCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, VERSION) {
    $rootScope.version = VERSION;
})
;