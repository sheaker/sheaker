(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('MainController', MainController);

    function MainController($scope) {
        $scope.carousel = {
            interval:     3500,
            noWrapSlides: false,
            slides: [
                {
                    image: '/assets/images/lockupscreen1.png',
                    text1: 'MAIN.WELCOME.SLIDES.TEXT_1'
                },
                {
                    image: '/assets/images/lockupscreen2.png',
                    text2: 'MAIN.WELCOME.SLIDES.TEXT_2'
                },
                {
                    image: '/assets/images/lockupscreen3.png',
                    text3: 'MAIN.WELCOME.SLIDES.TEXT_3'
                }
            ]
        };
    }
})();
