/**
 * Created by ved on 9/7/17.
 */


'use strict';

angular.module('XebiaTest')
    .controller('ProfileCtrl', ['$scope','$rootScope','Auth', ProfileCtrl]);

function MasterCtrl($scope,$rootScope,Auth) {

    if(!$rootScope.user){
        Auth.logout();
    }

}