(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('NavbarController', NavbarController);

    function NavbarController($scope, tmhDynamicLocale) {
        $scope.getLocale = function () {
            return tmhDynamicLocale.get();
        };
    }
})();
