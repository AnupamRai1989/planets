(function () {
    'use strict';
    angular.module('app.core').directive('planetsGraph', directiveFunction);
    directiveFunction.$inject = ['$timeout','PlanetsGraph']
    function directiveFunction($timeout, PlanetsGraph) {
        return {
            link: link
        };

        function link(scope, element,attrs) {
            var svgElement = element.empty().html('<svg>').children()[0];
            scope.$watch(attrs.planetResults,function(val){
            PlanetsGraph(svgElement, angular.copy(val));
            });
        }
    }
}());