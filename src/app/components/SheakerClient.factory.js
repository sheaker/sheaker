(function() {
    'use strict';

    angular
        .module('sheaker')
        .factory('SheakerClient', SheakerClient);

    /** @ngInject */
    function SheakerClient($resource, BACKEND_URL) {
        var resource;

        resource = $resource(BACKEND_URL + '/clients', null, null);
        return resource;
    }

})();
