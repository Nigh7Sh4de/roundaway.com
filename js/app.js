(function() {
    window.roundaway = {};
    roundaway.is_mobile = /Mobi/i.test(navigator.userAgent);
    roundaway.com = angular.module('roundawaycom', ['ngRoute', 'ae-datetimepicker']);

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
        .when('/manage', {
            templateUrl: 'views/manage.html',
            controller: 'ManageCtrl'
        })
        .when('/manage/spots/new', {
            templateUrl: 'views/new_spot.html',
            controller: 'ManageCtrl'
        })
        .when('/manage/spots/:spot_id', {
            templateUrl: 'views/edit_spot.html',
            controller: 'ManageSpotCtrl'
        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileCtrl'
        })
        .when('/404', {
            templateUrl: 'views/404.html'
        })
        // .otherwise('/404')

    })

    // var navbar = $("nav#mainNavBar");
    
    // var setParallax = function() {
    //     var vh2 = window.innerHeight / 2;
    //     var scrollPoint = vh2 - 150; 
    //     if ($(window).scrollTop() >= scrollPoint)
    //         navbar.addClass("navbar-fixed parallax");
    //     else
    //         navbar.removeClass("navbar-fixed parallax");
            
    //     var parallax = document.getElementsByClassName('parallax');
    //     var param = {
    //         speed: 3
    //     }
    //     for (var i = 0; parallax.length > i; i++) {
    //         // Calculate the new background position
    //         var bgScroll = -((window.scrollY -parallax [i].offsetTop) / param.speed);
    //         // Save new background position to the variable
    //         var bgPosition = 'center '+ bgScroll + 'px';
    //         // Set new background position to the element
    //         parallax [i].style.backgroundPosition = bgPosition;
    //     }
    // }
    // if (!is_mobile)
    //     $(window).scroll(setParallax);
    
    // window.initCtrl = function() {
    //     if (!is_mobile)
    //         setParallax();
    //     window.scrollTo(0, 0);
    // }

}())