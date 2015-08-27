(function() {
    'use strict';

    angular
        .module('sheaker')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $stateParams, $translate, $translateLocalStorage) {
        $rootScope.$on('$stateChangeSuccess', function () {
            var langToSet     = '';

            if ($stateParams.lang) {
                langToSet = $stateParams.lang;
            } else if ($translateLocalStorage.get('websiteLanguage')) {
                langToSet = $translateLocalStorage.get('websiteLanguage');
            } else {
                langToSet = $translate.preferredLanguage();
            }

            if (langToSet) {
                $translate.use(langToSet)
                    .then(function (language) {
                        $rootScope.currentLanguage = language;
                        $stateParams.lang = language;
                    });
            }
        });
    }

})();
