(function() {
    'use strict';

    angular
        .module('sheaker')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $stateParams, $translate, $translateLocalStorage, tmhDynamicLocale) {
        $rootScope.$on('$stateChangeSuccess', function () {
            if ($stateParams.locale) {
                $translate.use($stateParams.locale);
                tmhDynamicLocale.set($stateParams.locale);
            } else if ($translateLocalStorage.get('websiteLocale')) {
                $translate.use($translateLocalStorage.get('websiteLocale'));
                tmhDynamicLocale.set($translateLocalStorage.get('websiteLocale'));
            } else {
                $translate.use($translate.preferredLanguage());
                tmhDynamicLocale.set($translate.preferredLanguage());
            }
        });

        $rootScope.$on('$localeChangeSuccess', function () {
            $stateParams.locale = tmhDynamicLocale.get();
        });
    }

})();
