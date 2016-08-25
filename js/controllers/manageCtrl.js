(function() {
    
    var ManageCtrl = function($scope, $http) {
        $scope.test = "Manage controller started";

        $http.get('/api/spots')
        .then(function(res) {
            $scope.res = res.data;
        })
        .catch(function(err) {
            console.error(err);
        })
    }

    roundaway.com.controller('ManageCtrl', ManageCtrl)
}());