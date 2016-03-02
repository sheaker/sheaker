(function() {
    'use strict';

    angular
        .module('sheaker')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                template: '<ui-view/>'
            })
            .state('app.main', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller:  'MainController'
            })
            .state('app.product', {
                url: '/is',
                templateUrl: 'app/product/product.html',
                controller:  'ProductController'
            })
            .state('app.pricing', {
                url: '/pricing',
                templateUrl: 'app/pricing/pricing.html',
                controller:  'PricingController'
            })
            .state('app.create', {
                url: '/create',
                templateUrl: 'app/create/create.html',
                controller:  'CreateController'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
