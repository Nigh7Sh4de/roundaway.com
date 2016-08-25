(function() {
        
    window.fbAsyncInit = function() {
        FB.init({
        appId      : roundaway.config.FACEBOOK_CLIENT_ID,
        xfbml      : true,
        version    : 'v2.7'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    var LoginCtrl = function($scope, $http, $location) {

        $scope.login = function() {
            FB.login(function(response) {
                if (response.authResponse) {
                    $http.post('/auth/facebook', {
                        access_token: response.authResponse.accessToken
                    })
                    .then(function(data) {
                        if (!data || !data.data || !data.data.data || 
                            typeof data.data.data !== 'string')
                            throw new Error('Did not receive JWT in auth response.');
                        roundaway.jwt = data.data.data;
                        $http.defaults.headers.common.Authorization = 'JWT ' + roundaway.jwt;
                        $location.path('/manage');
                    })
                    .catch(function(err) {
                        console.error(err);
                    })
                }
            });
        }
    }

    roundaway.com.controller('LoginCtrl', LoginCtrl)
}());