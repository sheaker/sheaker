(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('NavbarController', NavbarController);

    function NavbarController($scope, $translate) {
        $scope.getLanguage = function () {
            return $translate.use();
        };
    }
})();
