(function() {
    'use strict';
    angular.module('app.planets').component('starWarsPlanets', {
        templateUrl: 'components/planets/planets.html',
        controller: ControllerFunction,
        controllerAs: 'vm'
    });
    ControllerFunction.$inject = ['$rootScope', '$scope', '$timeout', 'loginService', 'planetsService', '$location'];

    function ControllerFunction($rootScope, $scope, $timeout, loginService, planetsService, $location) {
        var vm = this;
        vm.$onInit = init;

        function init() {
            vm.planets = null;
            $rootScope.$on('$stateChangeStart', function(event, toState) {
                var userDetails = loginService.getUserDetails();
                if (userDetails && userDetails.isLoggedIn && toState.name === 'login') {
                    event.preventDefault();
                }
            });
            planetsService.getPlanets().then(getPlanetsSuccess);
        }

        function getPlanetsSuccess(planets) {
            vm.planets = planets;
        }
    }
}());