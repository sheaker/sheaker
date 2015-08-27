(function() {
    'use strict';

    angular
        .module('sheaker', [
            'sheaker.config',
            'ngResource',
            'ngRoute',
            'ngCookies',
            'ui.bootstrap',
            'pascalprecht.translate',
            'tmh.dynamicLocale'
        ]);

})();
