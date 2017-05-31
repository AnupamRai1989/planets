(function () {
    'use strict';

    angular.module('app.core').factory('planetsService', serviceFunction);
    serviceFunction.$inject = ['$http', 'planetsApi', '_'];
    function serviceFunction($http, planetsApi, _) {
        return {
            getPlanets: getPlanets,
            getPlanet: getPlanet
        };

        function getPlanets() {
            var url = planetsApi + '/planets/';
            return $http.get(url).then(getPlanetsSuccess).catch(serviceFailed);
        }
        function getPlanetsSuccess(response) {
            var planets = response && response.data;
            angular.forEach(planets.results, function (planet) {
                var planetUrl = planet.url;
                planetUrl = planetUrl.replace('http://swapi.co/api/planets/', '');
                planet.id = planetUrl.slice(0,1);
            });
            return planets;
        }

        function getPlanet(id) {
            var url = planetsApi + '/planets/' + id;
            return $http.get(url).then(getPlanetSuccess).catch(serviceFailed);
        }
        function getPlanetSuccess(response) {
            return response && response.data;
        }
        function serviceFailed() {

        }
    }
}());