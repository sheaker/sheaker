(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('ProductController', ProductController);

    function ProductController($scope) {
        $scope.featureToAff = 1;
    }

})();
