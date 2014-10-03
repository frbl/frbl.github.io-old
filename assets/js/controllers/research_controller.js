frblControllers.controller('ResearchCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('/content/research.json').success(function(data) {
      $scope.research = data;
    });
  }
]);