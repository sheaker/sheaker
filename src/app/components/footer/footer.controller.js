(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('FooterController', FooterController);

    function FooterController($scope, $translate, tmhDynamicLocale) {
        $scope.currentLang = $translate.use();
        $scope.availableLangs = [
            { short: 'en', long: 'English' },
            { short: 'fr', long: 'Français' },
            { short: 'es', long: 'Español' }
        ];

        $scope.updateLang = function () {
            if ($scope.currentLang !== $translate.use()) {
                $translate.use($scope.currentLang);
                tmhDynamicLocale.set($scope.currentLang);
            }
        };
    }
})();
