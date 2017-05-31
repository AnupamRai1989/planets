(function () {
    'use strict';

    angular.module('app.core').config(configFunction);
    configFunction.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    function configFunction($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('login', {
            url: '/',
            template: '<star-wars-login class="star-wars__login"></star-wars-login>'
        }).state('planets', {
            url: '/planets',
            template: '<star-wars-planets class="star-wars__planets"></star-wars-planets>'
        }).state('planetDetail',{
            url:'/planets/{planetId}',
            template:'<star-wars-planet-detail></star-wars-planet-detail>'
        });
    }
}());