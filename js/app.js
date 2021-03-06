// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
$ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.pasien', {
    url: '/pasien',
    views: {
      'tab-pasien': {
        templateUrl: 'templates/tab-pasien.html',
        controller: 'PasienCtrl'
      }
    }
  })

  .state('tab.dokter', {
      url: '/dokter',
      views: {
        'tab-dokter': {
          templateUrl: 'templates/tab-dokter.html',
          controller: 'DokterCtrl'
        }
      }
    })
   .state('tab.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'templates/tab-home.html',
          controller: 'Home'
        }
      }
    })

  .state('tab.reg', {
    url: '/reg',
    views: {
      'tab-reg': {
        templateUrl: 'templates/tab-reg.html',
        controller: 'RegCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
