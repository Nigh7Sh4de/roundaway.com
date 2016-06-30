(function() {
    
    var MainCtrl = function($scope, $http) {
        $http.get('/api/users/profile').then(function(res) {
            if (res.status === 200 && res.data.data) {
                $scope.loggedin = true;
                var profile = res.data.data;
                $scope.name = profile.name;
                $scope.SocialNetworks = {
                    Facebook: profile.authid.facebook != null,
                    Google: profile.authid.google != null
                }
            } else {
                $scope.loggedin = false;
            }
        })
    }

    roundawaycom.controller('MainCtrl', MainCtrl)
}());