frblControllers.controller('IndexCtrl', ['$scope',
    function ($scope) {
        var images = ['imac', 'mbp', 'white'];
        var image = Math.floor(Math.round(Math.random()*(images.length-1)));

        $scope.hero = images[image];
    }
]);