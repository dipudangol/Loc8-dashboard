/* eslint no-param-reassign: 0 */
/* eslint no-underscore-dangle: 0 */
/* global angular document */


const app = angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer','Constants']);


app.config(function ($stateProvider, $urlRouterProvider, $authProvider,facebookApp) {

  /**
   * Helper auth functions
   */
  var skipIfLoggedIn = ['$q', '$auth', function ($q, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.reject();
    } else {
      deferred.resolve();
    }
    return deferred.promise;
  }];

  var loginRequired = ['$q', '$location', '$auth', function ($q, $location, $auth) {
    var deferred = $q.defer();
    if ($auth.isAuthenticated()) {
      deferred.resolve();
      $location.path('/home');
    } else {
      $location.path('/login');
    }
    return deferred.promise;
  }];

  /**
   * App routes
   */
  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'AppCtrl',
      templateUrl: 'src/views/mainPage.html',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .state('login', {
      url: '/',
      templateUrl: 'src/views/login.html',
      controller: 'LoginCtrl',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'src/views/signup.html',
      controller: 'SignupCtrl',
      resolve: {
        skipIfLoggedIn: skipIfLoggedIn
      }
    })
    .state('logout', {
      url: '/logout',
      template: null,
      controller: 'LogoutCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'src/views/profile.html',
      controller: 'ProfileCtrl',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .state('AddaCar', {
      url: '/addacar',
      templateUrl: 'src/views/AddaCar.html',
      controller: 'AddaCar',
      resolve: {
        loginRequired: loginRequired
      }
    })
     .state('partsRequested', {
      url: '/partsRequested',
      templateUrl: 'src/views/partsRequested.html',
      controller: 'requestParts',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .state('carInGarage', {
      url: '/carInGarage',
      templateUrl: 'src/views/carsInGarage.html',      
      controller: 'carsInGarage',
      resolve: {
        loginRequired: loginRequired
      }
    })
    .state('editcar', {
      url: '/editCar/:carid',
      templateUrl: 'src/views/editCarsInGarage.html',
      controller:"editCar",
      resolve: {
        loginRequired: loginRequired
      }
    });

  $urlRouterProvider.otherwise('/');

  /**
   *  Satellizer config
   */
  $authProvider.facebook({
    clientId: facebookApp.clientId
  });

  $authProvider.google({
    clientId: '540950355080-5pfjmd8r80t1gonppnqtl88shol3312j.apps.googleusercontent.com'
  });

  $authProvider.oauth2({
    name: 'foursquare',
    url: '/auth/foursquare',
    clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
    redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
    authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate'
  });
});




//partsRequest 
app.controller('requestParts', ['$scope', '$rootScope', '$http', '$auth', function ($scope, $rootScope, $http, $auth) { 

  $scope.requestParts = function () {
    // Simple GET request example:
    $http({
      method: 'POST',
      url: 'http://192.168.100.37:5000/requestpart',
      data: $scope.partsRequest
    }).then(function successCallback(response) {
    }, function errorCallback(response) {
    });
  }

}]);
