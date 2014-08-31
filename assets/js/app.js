var phonecatApp = angular.module('frbl', [
  'ngRoute',
  'frblControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      }).
      when('/publications', {
        templateUrl: 'views/publications.html',
        controller: 'ResearchCtrl'
      }).
      otherwise({
        templateUrl: 'views/about.html'
      });
      
  }]);