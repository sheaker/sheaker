(function() {
    'use strict';

    angular
        .module('sheaker')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $stateParams, $translate, $translateLocalStorage, tmhDynamicLocale) {
        $rootScope.$on('$stateChangeSuccess', function () {
            if ($stateParams.locale) {
                $translate.use($stateParams.locale.toLowerCase());
                tmhDynamicLocale.set($stateParams.locale.toLowerCase());
            } else if ($translateLocalStorage.get('websiteLocale')) {
                $translate.use($translateLocalStorage.get('websiteLocale'));
                tmhDynamicLocale.set($translateLocalStorage.get('websiteLocale'));
            } else {
                $translate.use($translate.preferredLanguage().toLowerCase());
                tmhDynamicLocale.set($translate.preferredLanguage().toLowerCase());
            }
        });

        $rootScope.$on('$localeChangeSuccess', function () {
            $stateParams.locale = tmhDynamicLocale.get();
        });
    }

})();
