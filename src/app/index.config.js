(function() {
    'use strict';

    angular
        .module('sheaker')
        .config(config);

    /** @ngInject */
    function config($translateProvider, tmhDynamicLocaleProvider) {
        $translateProvider
            .useStaticFilesLoader({
                prefix: 'assets/languages/locale-',
                suffix: '.json'
            })
            .useSanitizeValueStrategy(null);

        $translateProvider
            .uniformLanguageTag('bcp47')
            .determinePreferredLanguage()
            .registerAvailableLanguageKeys(['en', 'es', 'fr'], {
              'en-*': 'en',
              'es-*': 'es',
              'fr-*': 'fr'
            });

        tmhDynamicLocaleProvider
            .localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js')
            .storageKey('websiteLocale')
            .useStorage('$translateLocalStorage');
    }

})();
