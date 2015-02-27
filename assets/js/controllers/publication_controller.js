frblControllers.controller('PublicationCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/content/publications.json').success(function(data) {
            $scope.publications = data;
        });
    }
]);