frblControllers.controller('ContactCtrl', ['$scope', '$document',
    function ($scope, $document) {
        $scope.options = {scrollwheel:false, streetViewControl:false, mapTypeControl:false, panControl:false};
        $scope.map = { center: { latitude: 53.240670, longitude: 6.536378 }, zoom: 17 };
        $scope.rug = true;
        $scope.heymans = false;
        $scope.set_loc = function(name) {
            if(name == 'rug') {
                $scope.rug = true;
                $scope.heymans = false;
                $scope.map = { center: { latitude: 53.240670, longitude: 6.536378 }, zoom: 17 };
            }
            else if(name == 'heymans'){
                $scope.rug = false;
                $scope.heymans = true;
                $scope.map = { center: { latitude: 53.2230132, longitude: 6.5574806 }, zoom: 17 };

            }
        };

    }
]);
