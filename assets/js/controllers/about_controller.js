frblControllers.controller('AboutCtrl', ['$scope', 'GoogleCalendarService',
  function ($scope, GoogleCalendarService) {
    $scope.current_location = 'Loading location..'
    GoogleCalendarService.refresh().then(function(payload) {
      angular.forEach(payload.data.items, function(data) {
        $scope.current_location = data.summary;
      });
    });
  }
]);