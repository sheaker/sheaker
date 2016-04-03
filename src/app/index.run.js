(function() {
    'use strict';

    angular
        .module('sheaker')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $stateParams, $translate, $translateLocalStorage, tmhDynamicLocale) {
        var deregistrationCallback = $rootScope.$on('$stateChangeSuccess', function () {
            if ($translateLocalStorage.get('websiteLocale')) {
                $translate.use($translateLocalStorage.get('websiteLocale'));
                tmhDynamicLocale.set($translateLocalStorage.get('websiteLocale'));
            } else {
                $translate.use($translate.preferredLanguage().toLowerCase());
                tmhDynamicLocale.set($translate.preferredLanguage().toLowerCase());
            }
        });
        $rootScope.$on('$destroy', deregistrationCallback);
    }

})();
