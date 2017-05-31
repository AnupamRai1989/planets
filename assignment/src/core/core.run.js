(function () {
    'use strict';

    angular.module('app.core').run(runFunction);
    runFunction.$inject = ['$rootScope', '$location', 'loginService'];
    function runFunction($rootScope, $location, loginService) {
            loginService.isLoggedIn().then(function (userDetails) {
                console.log('routechange');
                if (userDetails.isLoggedIn) {
                    event.preventDefault();
                    $location.path('/planets');
                }
                else {
                    $location.path('/login');
                }
            });
    }
}());