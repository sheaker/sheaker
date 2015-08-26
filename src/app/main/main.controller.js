(function() {
    'use strict';

    angular
        .module('sheaker')
        .controller('MainController', MainController);

    function MainController($scope, $translate) {
        $scope.carousel = {
            interval:     3500,
            noWrapSlides: false,
            slides: [
                {
                    image: '/assets/images/lockupscreen1.png',
                    text1: $translate.instant('MAIN.WELCOME.SLIDES.TEXT_1')
                },
                {
                    image: '/assets/images/lockupscreen2.png',
                    text2: $translate.instant('MAIN.WELCOME.SLIDES.TEXT_2')
                },
                {
                    image: '/assets/images/lockupscreen3.png',
                    text3: $translate.instant('MAIN.WELCOME.SLIDES.TEXT_3')
                }
            ]
        };
    }
})();
