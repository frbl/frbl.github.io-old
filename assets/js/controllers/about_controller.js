frblControllers.controller('AboutCtrl', ['$scope','ResearchService',
    function ($scope, ResearchService) {
        ResearchService.list().success(function(data) {
            $scope.research = data;
        });
    }
]);