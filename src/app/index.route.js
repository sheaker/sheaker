(function() {
    'use strict';

    angular
        .module('sheaker')
        .config(routeConfig);

    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller:  'MainController'
            })
            .when('/is', {
                templateUrl: 'app/product/product.html',
                controller:  'ProductController'
            })
            .when('/pricing', {
                templateUrl: 'app/pricing/pricing.html',
                controller:  'PricingController'
            })
            .when('/create/:teamName?', {
                templateUrl: 'app/create/create.html',
                controller:  'CreateController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
