(function() {
    var roundaway = window.roundaway = {};
    roundaway.com = angular.module('roundawaycom', ['ngRoute']);

    roundaway.com.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/404', {
            templateUrl: 'views/404.html'
        })
        .otherwise('/404')

    })

    $(window).scroll(function() {
        var parallax = document.getElementsByClassName('parallax');
        var param = {
            speed: 3
        }
        for (var i = 0; parallax.length > i; i++) {
            // Calculate the new background position
            var bgScroll = -((window.scrollY -parallax [i].offsetTop) / param.speed);
            // Save new background position to the variable
            var bgPosition = 'center '+ bgScroll + 'px';
            // Set new background position to the element
            parallax [i].style.backgroundPosition = bgPosition;
        }
    })

}())