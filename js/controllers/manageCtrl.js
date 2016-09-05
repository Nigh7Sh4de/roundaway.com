(function() {
    
    var ManageCtrl = function($scope, $http, $location) {
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
            },
            price: {
                perHour: undefined
            }
        };

        $scope.searchAddress = function() {
            $http.post('/api/util/location/geocode', {
                address: $scope.newspot.search_address
            })
            .then(function(res) {
                $scope.newspot.result_address = res.data.data;
                $scope.newspot.address = $scope.newspot.result_address[0];
            })
            .catch(function(err) {
                newspot.error = err;
            })
        }
        $scope.createSpot = function() {
            $scope.newspot.error = null;
            $http.put('/api/spots', {
                location: {
                    address: $scope.newspot.address
                },
                price: $scope.newspot.price
            })
            .then(function(res) {
                $scope.newspot.success = true;
            })
            .catch(function(err) {
                $scope.newspot.error = err.status + ': ' + (err.data.errors || err.data)
            })
        }

        $scope.editSpot = function(spot) {
            $location.path('/manage/spots/' + spot.id);
            $scope.editspot = spot;
        }
    }

    roundaway.com.controller('ManageCtrl', ManageCtrl)
}());