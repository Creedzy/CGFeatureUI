/**
 * Created by nas on 11/21/2016.
 */

/* jshint -W097 */
'use strict';
angular.module('commonFactoriesModule')
    .factory('UserFactory', ['$q', '$http', 'RestRequestFactory', function ($q, $http, RestRequest) {

        function User(id) {

            this.id = id;
            this.username = id;
            this.firstname = null;
            this.lastname = null;
            this.facebookid = null;
            this.messages = null;
            this.notifications = null;
            this.videos = null;

            this.init = function (data) {

                this.id = data.id;
                this.username = data.username;
                this.firstname = data.givenname;
                this.lastname = data.familyname;

                if (angular.isDefined(data.facebookid) && data.facebookid) {
                    this.facebookid = data.facebookid;
                }

            };

            this.init(data);

        }


        this.loginRequest = RestRequest('/login');
        this.login = function (mail, passwrd) {
            var data = {
                username: mail,
                password: passwrd
            };
            var promise = loginRequest.post(data);
            promise
                .then(function (data) {
                console.log('login success');

            }, function (error) {
                console.log('login failed');

            });
            return promise;
        };


        this.logoutRequest = RestRequest('/logout');
        this.logout = function () {
            var promise = logoutRequest.get();
            promise
                .then(function (data) {
                console.log('logout success');

            }, function (error) {
                console.log('logout failed');

            });
            return promise;
        };

        this.getUserRequest = RestRequest('/CC/User/');
        this.getUser = function (userId) {
            var deferred = $q.defer();
            var promise = getUserRequest.get(userId);
            promise
                .then(function (data) {
                console.log('logged in user  success');
                console.log(response);
                var user = new User(response.data);
                deferred.resolve(user);
            }, function (error) {
                console.log('logged in user failed');
                deferred.reject(errors);
            });
            return deferred.promise;
        };


        return User;

    }]);