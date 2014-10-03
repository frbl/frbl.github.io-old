frblControllers.controller('PublicationDetailCtrl', ['$scope', '$http', '$filter', '$routeParams',
  function($scope, $http, $filter, $routeParams) {
    var publicationId = $routeParams.publicationId;
    $http.get('/content/publications.json').success(function(data) {
      $scope.publication = $filter('filter')(data, {id: publicationId})[0];
      console.log($scope.publication)
    });
  }
]);