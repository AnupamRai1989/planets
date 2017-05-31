(function () {
    'use strict';
    angular.module('app.core').factory('loginService', serviceFunction);
    serviceFunction.$inject = ['$http', '$location','loginApi'];
    function serviceFunction($http, $location,loginApi) {
        var userDetails = {
        };
        return {
            signIn: signIn,
            signOut: signOut,
            isLoggedIn: isLoggedIn,
            getUserDetails: getUserDetails
        };

        function signIn(username, password) {
            var url = loginApi + '/login';
            var payload = { username: username, password: password };
            return $http.post(url, payload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(signInSuccess, signInFailed);
        }
        function signInSuccess(response) {
            userDetails = response && response.data;
            return userDetails;
        }
        function signInFailed(error) {
            userDetails = null;
            return error;
        }
        function signOut() {
            var url = loginApi + '/logout';
            return $http.get(url).then(signOutSuccess).catch(serviceFailed);
        }

        function isLoggedIn() {
            var url = loginApi + '/isLoggedIn';
            return $http.get(url, { cache: false }).then(isLoggedInSuccess).catch(serviceFailed);
        }
        function signOutSuccess(response) {
            var flag = response && response.data;
            userDetails = null;
            return flag;
        }
        function isLoggedInSuccess(response) {
            return response && response.data;
        }
        function serviceFailed() {

        }
        function getUserDetails() {
            return userDetails;
        }
    }
}());