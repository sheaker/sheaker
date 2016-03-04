(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('NavbarController', NavbarController);

    function NavbarController($scope, tmhDynamicLocale) {
        $scope.getLocale = function () {
            return tmhDynamicLocale.get();
        };

        $scope.MenuState = 0;

        $scope.openMobileMenu= function() {
          $scope.MobileMenuState = !$scope.MobileMenuState;
        };
    }
})();
