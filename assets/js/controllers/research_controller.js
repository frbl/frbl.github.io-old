frblControllers.controller('ResearchCtrl', ['$scope', '$http', 'GoogleCalendarService',
  function ($scope, $http, GoogleCalendarService) {
    $http.get('/content/research.json').success(function(data) {
      $scope.research = data;
      console.log(GoogleCalendarService.refresh());
    });
  }
]);