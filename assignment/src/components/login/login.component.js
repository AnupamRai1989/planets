(function () {
    'use strict';

    angular.module('app.login').component('starWarsLogin', {
        templateUrl: 'components/login/login.html',
        controller: ControllerFunction,
        controllerAs: 'vm'
    });
    ControllerFunction.$inject = ['loginService', '$location', '$rootScope'];
    function ControllerFunction(loginService, $location, $rootScope) {
        var vm = this;
        vm.$onInit = init;
        vm.signIn = signIn;
        function init() {
            vm.username = '';
            vm.password = '';
        }
        function signIn() {
            loginService.signIn(vm.username, vm.password).then(function (userDetails) {
                if (userDetails.isLoggedIn) {
                    $rootScope.$emit('user:loggedIn');
                    $location.path('/planets');
                }
                else {
                    vm.authenticationError=userDetails.data.message;
                }
            });
        };
    }
}());