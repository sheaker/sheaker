(function() {
    'use strict';

    angular
        .module('sheaker')
        .config(config);

    /** @ngInject */
    function config($translateProvider, tmhDynamicLocaleProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/languages/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('es');
        $translateProvider.useSanitizeValueStrategy(null);
        $translateProvider.useLocalStorage();

        tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');
    }

})();
