/**
 * Created by ved on 9/7/17.
 */

'use strict';
angular.module('XebiaTest')
    .factory('ApiCall', ['$http','$rootScope','$state', ApiCall]);

function ApiCall($http,$rootScope,$state) {

    var swapi = {};

    var baseUrl = 'http://swapi.co/api/';

    swapi.getPeople = function(id,cb) {
        var url = baseUrl+ 'people/'+id;
        $http.get(url).then(function (response) {
            cb(response);
        },function (error) {
            console.log(error,'error');
            $rootScope.error = {name:error.data};
            $state.transitionTo('error');
        })
    };

    swapi.userPlanet = function (url,cb) {
        $http.get(url).then(function (response) {
            cb(response);
        },function (error) {
            console.log(error,'error');
            $rootScope.error = {name:error.data};
            $state.transitionTo('error');
        })
    };

    swapi.getPlanet = function(id,cb) {
        var url = baseUrl+'planets/'+id;
        $http.get(url).then(function (response) {
            cb(response);
        },function (error) {
            console.log(error,'error');
            $rootScope.error = {name:error.data};
            $state.transitionTo('error');
        })
    };

    return swapi;
}