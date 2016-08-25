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
    }

    roundaway.com.controller('ManageCtrl', ManageCtrl)
}());