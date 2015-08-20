(function() {
    'use strict';

angular
.module('sheaker')
.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/main/main.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

})();
