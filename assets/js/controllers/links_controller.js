frblControllers.controller('LinksCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/content/links.json').success(function(data) {
      $scope.links = data;
    });
  }
]);