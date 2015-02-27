frblControllers.controller('ContactCtrl', ['$scope', '$document',
    function ($scope, $document) {
        $scope.options = {scrollwheel:false, streetViewControl:false, mapTypeControl:false, panControl:false};
        $scope.map = { center: { latitude: 53.240670, longitude: 6.536378 }, zoom: 17 };
        $scope.rug = true;
        $scope.umcg = false;
        $scope.set_loc = function(name) {
            if(name == 'rug') {
                $scope.rug = true;
                $scope.umcg = false;
                $scope.map = { center: { latitude: 53.240670, longitude: 6.536378 }, zoom: 17 };
            }
            else if(name == 'umcg'){
                $scope.rug = false;
                $scope.umcg = true;

                $scope.map = { center: { latitude: 53.224018, longitude: 6.575416 }, zoom: 17 };

            }
        };

    }
]);