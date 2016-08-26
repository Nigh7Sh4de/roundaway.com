/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import { createStore } from 'redux';

	const reducer = function () {};

	const store = createStore(reducer, 0);

	store.subscribe(() => {
	    document.write('store changed', store.getState());
	});

	store.dispatch({
	    type: 'INC',
	    payload: 1
	});

	//window.roundaway = {};
	//roundaway.is_mobile = /Mobi/i.test(navigator.userAgent);


	// roundaway.com = angular.module('roundawaycom', ['ngRoute']);

	// roundaway.com.config(function($routeProvider) {
	//     $routeProvider
	//     .when('/', {
	//         templateUrl: 'views/home.html',
	//         controller: 'HomeCtrl'
	//     })
	//     .when('/about', {
	//         templateUrl: 'views/about.html',
	//         controller: 'AboutCtrl'
	//     })
	//     .when('/contact', {
	//         templateUrl: 'views/contact.html',
	//         controller: 'ContactCtrl'
	//     })
	//     .when('/login', {
	//         templateUrl: 'views/login.html',
	//         controller: 'LoginCtrl'
	//     })
	//     .when('/manage', {
	//         templateUrl: 'views/manage.html',
	//         controller: 'ManageCtrl'
	//     })
	//     .when('/profile', {
	//         templateUrl: 'views/profile.html',
	//         controller: 'ProfileCtrl'
	//     })
	//     .when('/404', {
	//         templateUrl: 'views/404.html'
	//     })
	//     // .otherwise('/404')

	// })

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

/***/ }
/******/ ]);