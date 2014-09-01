var frblControllers = angular.module('frblControllers', []);

frblControllers.controller('PublicationCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('content/publications.json').success(function(data) {
      $scope.publications = data;
    });
  }]);
  
frblControllers.controller('PublicationDetailCtrl', ['$scope', '$http', '$filter', '$routeParams',
  function($scope, $http, $filter, $routeParams) {
    var publicationId = $routeParams.publicationId;
    $http.get('content/publications.json').success(function(data) {
      $scope.publication = $filter('filter')(data, {id: publicationId})[0];
      console.log($scope.publication)
    });
    
  }]);

frblControllers.controller('ResearchCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('content/research.json').success(function(data) {
      $scope.research = data;
    });
  }]);

frblControllers.controller('LinksCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('content/links.json').success(function(data) {
      $scope.links = data;
    });
  }]);