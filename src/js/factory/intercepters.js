/**
 * Created by ved on 9/7/17.
 */


angular
    .module('XebiaTest')
    .factory('SessionInjector', [SessionInjector])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.interceptors.push('SessionInjector');
    }]);

function SessionInjector(Auth) {

    var sessionInjector = {
        request:function (config){

            config.headers['Content-Type'] = "application/json";

            return config
        }
    };

    return sessionInjector;

}


