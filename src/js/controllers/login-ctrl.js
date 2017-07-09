/**
 * Created by ved on 9/7/17.
 */


'use strict';

angular.module('XebiaTest')
    .controller('LoginCtrl', ['$scope','$state','$window','$rootScope','ApiCall', LoginCtrl]);

function LoginCtrl($scope,$state,$window,$rootScope,ApiCall) {
    $scope.saving = false;
    $scope.LoginBtnText = 'Login';


    $scope.login  = function (user) {
        if(user.username == 'Luke Skywalker' && user.psw === '19BBY'){
            $scope.saving = true;
            $scope.LoginBtnText = 'Logging in..';
            ApiCall.getPeople(1,function (res){
                if(res.data){
                    $scope.saving = false;
                    $scope.LoginBtnText = 'Login';
                    ApiCall.userPlanet(res.data.homeworld,function (planet){
                        $rootScope.user = res.data;
                        $window.localStorage.setItem('user',user.username);
                        $state.go('dashboard',{planet:planet.data});
                    })
                }

            });
        }else {
            $scope.LoginBtnText = 'Login';
            $scope.saving = false;
            alert('UserName or Password not correct')
        }
    }

}