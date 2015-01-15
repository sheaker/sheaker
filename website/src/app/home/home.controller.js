'use strict';

angular.module('sheaker')
  .controller('HomeCtrl', function ($scope) {
    $scope.functions= [
      {
        'title': 'Customer Management',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-list'
      },
      {
        'title': 'Stats',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-area-chart'
      },
      {
        'title': 'Music',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-music'
      },
      {
        'title': 'Event',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-calendar'
      },
      {
        'title': 'Cloud',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-cloud'
      },
      {
        'title': 'Mobile Phone',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-mobile'
      },
      {
        'title': 'Chat online',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-comment'
      },
      {
        'title': 'Alert client',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-bell'
      },
      {
        'title': 'User interface',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-user'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
