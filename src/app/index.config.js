(function() {
    'use strict';

angular
.module('sheaker')
.config(function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/languages/locale-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('es');
});

})();
