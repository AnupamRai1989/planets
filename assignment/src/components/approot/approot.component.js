(function () {
    'use strict';
    angular.module('app.approot').component('starWarsApproot', {
        templateUrl: 'components/approot/approot.html',
        controller: ControllerFunction,
        controllerAs: 'vm'
    });
    ControllerFunction.$inject = ['$rootScope', 'loginService', '$location'];
    function ControllerFunction($rootScope, loginService, $location) {
        var vm = this;
        vm.signOut = signOut;
        vm.$onInit = init;
        function init() {
            $rootScope.$on('user:loggedIn', userLoggedIn);
        }

        function signOut() {
            loginService.signOut().then(function (isLoggedOut) {
                if (isLoggedOut) {
                    $location.path('/login');
                }
            });
        }
        function userLoggedIn() {
            var userDetails = loginService.getUserDetails();
            var name = userDetails && userDetails.name;
            userDetails.firstName = typeof (name) ? name.slice(0, name.indexOf(' ')) : '';
            vm.userDetails = userDetails;
        }
    }
}());