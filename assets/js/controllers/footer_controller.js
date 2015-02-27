frblControllers.controller('FooterCtrl', ['$scope', 'GoogleCalendarService',
    function ($scope, GoogleCalendarService) {
        $scope.current_location = 'Loading location..';
        $scope.date = new Date();

        $scope.location_of_day = function(offset) {
            $scope.date.setDate($scope.date.getDate() + offset);
            GoogleCalendarService.refresh($scope.date).then(function(payload) {
                $scope.current_location = 'N/A';
                angular.forEach(payload.data.items, function(data) {
                    $scope.current_location = data.summary;
                });
            });
        };

        $scope.location_of_day(0);
    }
]);