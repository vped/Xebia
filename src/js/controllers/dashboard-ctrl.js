/**
 * Created by ved on 9/7/17.
 */


'use strict';

angular.module('XebiaTest')
    .controller('DashboardCtrl', ['$scope','Auth','ApiCall','$stateParams', DashboardCtrl]);

function DashboardCtrl($scope,Auth,ApiCall,$stateParams) {

    $scope.planet =[];

    $scope.searchedPlanet = ['1'];
    $scope.SearchBtnText = 'Search';
    $scope.searching = false;

    var planet = $stateParams.planet;

    if(planet){
        planet.width = planet.population/(planet.population.slice(0,planet.population.length-1));
        planet.width = (planet.width*planet.population.length)*2 + "px";
        $scope.planet.push(planet);
    }else {
        Auth.logout();
    }

    $scope.getPlanet = function (id) {
        if($scope.searchedPlanet.indexOf(id)===-1){
            $scope.SearchBtnText = 'Searching..';
            $scope.searching = true;
            ApiCall.getPlanet(id,function(res){
                if(res.data){
                    $scope.searching = false;
                    $scope.SearchBtnText = 'Search';
                    res.data.width = res.data.population && res.data.width!=='unknown'? res.data.population/(res.data.population.slice(0,res.data.population.length-1)):0;
                    res.data.width = res.data.width?(res.data.width*res.data.population.length)*2 + "px":"0Px";
                    $scope.planet.push(res.data);
                    $scope.searchedPlanet.push(id);
                    $scope.planetId = "";
                }
            });
        }else {
            $scope.SearchBtnText = 'Search';
            $scope.searching = false;
            alert('You have already serached this planet')
        }

    }

}