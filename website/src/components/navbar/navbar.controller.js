'use strict';

angular.module('sheaker')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.date = new Date();
    $scope.isActive = function(path) {
            if ($location.path() === path) {
                return true;
            }
            return false;
        };
  });
