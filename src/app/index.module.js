(function() {
    'use strict';

    angular
        .module('sheaker', [
            'sheaker.config',
            'ngResource',
            'ngCookies',
            'ui.router',
            'ui.bootstrap',
            'pascalprecht.translate',
            'tmh.dynamicLocale'
        ]);

})();
