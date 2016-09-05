(function() {
    
    var ManageCtrl = function($scope, $http) {
        $scope.test = "Manage controller started";

        $http.get('/api/spots')
        .then(function(res) {
            $scope.spots = res.data.data;
        })
        .catch(function(err) {
            console.error(err);
        })
        
        $scope.newspot = {
            ready: false,
            location: {
                address: undefined,
                coordinates: {
                    longitude: undefined,
                    latitude: undefined
                }
            },
            price: {
                perHour: undefined
            }
        };
        $scope.skipAddress = function() {
            $scope.newspot.ready = true;
        }
        $scope.searchAddress = function() {
            console.log('Searching for spot... (but not actually)');
            $scope.newspot.location.coordinates = {
                longitude: 12.345,
                latitude: 21.543
            }
            $scope.newspot.ready = true;
        }
    }

    roundaway.com.controller('ManageCtrl', ManageCtrl)
}());