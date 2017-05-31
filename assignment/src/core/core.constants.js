/* global _ */

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('_', _)
        .constant('loginApi', 'http://localhost:9000')
        .constant('planetsApi','http://swapi.co/api');
})();
