(function () {
    'use strict';
    angular.module('app.planetDetail').component('starWarsPlanetDetail', {
        templateUrl: 'components/planet-detail/planet-detail.html',
        controller: ControllerFunction,
        controllerAs: 'vm'
    });
    ControllerFunction.$inject = ['$stateParams', 'planetsService'];
    function ControllerFunction($stateParams, planetsService) {
        var vm = this;
        vm.$onInit = init;
        function init() {
            planetsService.getPlanet($stateParams.planetId).then(function(response){
            vm.planet = response;
            vm.planetResult = [response];
            });
        }
    }
}());