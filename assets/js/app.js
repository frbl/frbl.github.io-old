var frbl, frblControllers, frblServices;
frbl = angular.module('frbl', ['ngRoute', 'frblControllers', 'frblServices']);
frblControllers = angular.module('frblControllers', []);
frblServices = angular.module('frblServices', []);


frbl.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      }).
      when('/publications', {
        templateUrl: 'views/publications/publication-list.html',
        controller: 'PublicationCtrl'
      }).
      when('/publications/:publicationId', {
        templateUrl: 'views/publications/publication.html',
        controller: 'PublicationDetailCtrl'
      }).
      when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl'
      }).
      when('/contact', {
        templateUrl: 'views/contact.html'
      }).
      otherwise({
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });

  }]);