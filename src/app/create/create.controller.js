(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('CreateController', CreateController);

    function CreateController($scope, $log, Slug, SheakerClient) {
        $scope.steps = {
            first: true,
            second: false
        };

        $scope.slugifyGymName = function() {
            $scope.formDatas.subdomain = Slug.slugify($scope.formDatas.name);
        };

        $scope.setSecondStep = function() {
            $scope.steps.first = false;
            $scope.steps.second = true;
        };

        $scope.createClient = function() {
            SheakerClient
                .save($scope.formDatas).$promise
                .then(function(client) {
                    $log.debug(client);
                    $scope.formDatas = {};
                })
                .catch(function(error) {
                    $log.error(error);
                });
        };
    }

})();
