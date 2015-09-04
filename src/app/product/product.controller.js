(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('ProductController', ProductController);

    function ProductController($scope, $interval, $timeout) {
        $scope.featureToAff = 1;

        $scope.intervalFeatures = function() {
            $scope.intervalVar = $interval(function() {
                if ($scope.featureToAff >= 3) {
                    $scope.featureToAff=1;
                }
                else {
                    $scope.featureToAff+=1;
                }
            }, 4000);
        };

        $scope.onClick = function(idFeature) {
                $scope.featureToAff=idFeature;
                $interval.cancel($scope.intervalVar);
                $timeout.cancel($scope.timeoutVar);
                $scope.timeoutVar = $timeout($scope.intervalFeatures, 6000);
        };

        $scope.intervalFeatures();
    }

})();
