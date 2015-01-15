'use strict';

angular.module('sheaker')
  .controller('GymnasiumCtrl', function ($scope) {
    $scope.gymlist= [
      {
        'id': '1',
        'name': 'SuperGym',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-list'
      },
      {
        'id': '2',
        'name': 'Krystal',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-area-chart'
      },
      {
        'id': '3',
        'name': 'ForceGym',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-music'
      },
      {
        'id': '5',
        'name': 'GymInetron',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-calendar'
      },
      {
        'id': '6',
        'name': 'Jimini',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-cloud'
      },
      {
        'id': '7',
        'name': 'Vivo47',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices non nisl sed faucibus. Mauris ornare ante non nunc...',
        'logo': 'fa fa-mobile'
      },
    ];
  });
