/**
 * Created by ved on 9/7/17.
 */

'use strict';

angular.module('XebiaTest')
    .factory('Auth', ['$state','$window', Auth]);

function Auth($state,$window) {

    return {
        isLoggedIn : function() {
            var token = $window.localStorage.getItem('user');
            return token ? token : false;
        },
        logout:function() {
            $window.localStorage.removeItem('user');
            $state.go('login')
        }
    }

}