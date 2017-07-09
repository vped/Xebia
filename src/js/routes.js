/**
 * Created by ved on 9/7/17.
 */


'use strict';

/**
 * Route configuration for the XebiaTest module.
 */

angular.module('XebiaTest').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/login');

        // Application routes
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                menuCategory: 'dashboard',
                title: 'Dashboard',
                controller:'DashboardCtrl',
                templateUrl: 'templates/dashboard.html',
                params: {
                    planet:null
                }
            })
            .state('error', {
                templateUrl: 'templates/error.html'
            })
            .state('login', {
                url: '/login',
                menuCategory: 'login',
                controller:'LoginCtrl',
                templateUrl: 'templates/login.html'
            })
            .state('profile', {
                url: '/profile',
                menuCategory: 'profile',
                templateUrl: 'templates/profile.html'
            })

    }

]).run(['$state','$rootScope','Auth',function ($state,$rootScope,Auth) {

    $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
        if(!Auth.isLoggedIn()){
            event.preventDefault();
            Auth.logout();
        }
        $rootScope.menuCategory = toState.menuCategory;
    });

    $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams) {
        event.preventDefault();
        $rootScope.error = {name: event.name};
        $state.transitionTo('error');
    });


}]);