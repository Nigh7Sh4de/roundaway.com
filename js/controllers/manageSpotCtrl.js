(function() {
    
    var ManageSpotCtrl = function($scope, $http, $routeParams) {
        $http.get('/api/spots/' + $routeParams.spot_id)
        .then(function(res) {
            $scope.spot = res.data.data;
            $scope.spot.edit = {
                price: {
                    perHour: false
                },
                name: false,
                description: false,
                available: false
            }
        })
        .catch(function(err) {
            $scope.spot.error = err;
        })

        $scope.editName = function() {
            $scope.spot.edit.name = $scope.spot.name || '';
        }

        $scope.cancelEditName = function() {
            $scope.spot.name = $scope.spot.edit.name;
            $scope.spot.edit.name = false;
        }

        $scope.updateName = function() {
            $scope.spot.error = null;
            $http.put('/api/spots/' + $scope.spot.id + '/name', { name: $scope.spot.name })
            .then(function(res) {
                $scope.spot.success = 'Updated name';
                $scope.spot.edit.name = false;
            })
            .catch(function(error) {
                $scope.spot.error = error;
            })
        }

        $scope.editDescription = function() {
            $scope.spot.edit.description = $scope.spot.description || '';
        }

        $scope.cancelEditDescription = function() {
            $scope.spot.description = $scope.spot.edit.description;
            $scope.spot.edit.description = false;
        }

        $scope.updateDescription = function() {
            $scope.spot.error = null;
            $http.put('/api/spots/' + $scope.spot.id + '/description', { description: $scope.spot.description })
            .then(function(res) {
                $scope.spot.success = 'Updated description';
                $scope.spot.edit.description = false;
            })
            .catch(function(error) {
                $scope.spot.error = error;
            })
        }

        $scope.editPrice = function() {
            $scope.spot.edit.price = {
                perHour: $scope.spot.price.perHour
            };
        }

        $scope.cancelEditPrice = function() {
            $scope.spot.price = $scope.spot.edit.price;
            $scope.spot.edit.price = {
                perHour: false
            }
        }

        $scope.updatePrice = function() {
            $scope.spot.error = null;
            $http.put('/api/spots/' + $scope.spot.id + '/price', $scope.spot.price)
            .then(function(res) {
                $scope.spot.success = 'Updated price';
                $scope.spot.edit.price.perHour = false;
            })
            .catch(function(error) {
                $scope.spot.error = error;
            })
        }

        $scope.formatDate = function(str) {
            var date = new Date(str);
            return date.toString();
        }

        $scope.addAvailability = function() {
            $scope.spot.edit.available = {
                start: null,
                end: null,
                mode: 'add'
            };
        }

        $scope.removeAvailability = function() {
            $scope.spot.edit.available = {
                start: null,
                end: null,
                mode: 'remove'
            };
        }

        $scope.setRepeat = function(interval) {
            if ($scope.spot.edit.available.interval !== interval) 
                $scope.spot.edit.available.interval = interval;
            else $scope.spot.edit.available.interval = undefined;
        }

        $scope.getAvailableIntervalButtonClass = function(interval) {
            return {
                'glyphicon-check': $scope.spot.edit.available.interval === interval,
                'glyphicon-unchecked': $scope.spot.edit.available.interval !== interval
            }
        }

        $scope.cancelUpdateAvailability = function() {
            $scope.spot.edit.available = false;
        }

        $scope.updateAvailability = function() {
            $scope.spot.error = null;
            var oneday = 1000*60*60*24;
            var oneweek = oneday*7;
            if ($scope.spot.edit.available.interval === 'day')
                $scope.spot.edit.available.interval = oneday;
            else if ($scope.spot.edit.available.interval === 'week')
                $scope.spot.edit.available.interval = oneweek;
            else
                delete $scope.spot.edit.available.interval;

            if (!$scope.spot.edit.available.interval)
                delete $scope.spot.edit.available.count;

            var _remove = $scope.spot.edit.available.mode === 'add' ? '' : '/remove';
            $http.put('/api/spots/' + $scope.spot.id + '/available' + _remove, $scope.spot.edit.available)
            .then(function(res) {
                $scope.spot.success = ($scope.spot.edit.available.mode === 'add' ? 'Added' : 'Removed') + ' availability';
                $scope.spot.edit.available = false;
                return $http.get('/api/spots/' + $scope.spot.id + '/available');
            })
            .then(function(res) {
                $scope.spot.available.ranges = res.data.data.available;
            })
            .catch(function(err) {
                $scope.spot.error = error;
            })
        }
        
    }

    roundaway.com.controller('ManageSpotCtrl', ManageSpotCtrl)
}());