/* jshint -W097 */
'use strict';
/**
 * Created by nas on 9/11/2017.
 */



angular.module('commonFactoriesModule')

    .factory('RestRequestFactory', ['$q', '$http', function ($q, $http) {

        function RestRequest(url) {

            var url = url;

            this._doCall = function (method, data, multipart) {

                var deferred = $q.defer();
                var requestUrl = url;
                if (data && (method == 'GET' || method == 'DELETE')) {
                    var params = $.param(data);
                    if (requestUrl.indexOf('?') > -1) {
                        // Url already contains some parameters
                        requestUrl = requestUrl + '&' + params;
                    } else {
                        // Url does not contain any parameter
                        requestUrl = requestUrl + '?' + params;
                    }

                }

                if (method == 'DELETE') {
                    data = null;
                }

                // Init timeout
                this.timeout = $q.defer();

                var self = this;
                var config = null;

                if (multipart) {

                    config = {
                        method: method,
                        data: data,
                        url: requestUrl,
                        timeout: this.timeout.promise,
                        transformRequest: angular.identity,
                        headers: {
                            'Content-Type': undefined
                        },
                        responseType: 'json'
                    };

                } else {

                    if (data) {
                        config = {
                            method: method,
                            url: requestUrl,
                            data: data,
                            timeout: this.timeout.promise,
                            responseType: 'json'
                        };
                    } else {
                        config = {
                            method: method,
                            url: requestUrl,
                            timeout: this.timeout.promise,
                            responseType: 'json'
                        };
                    }

                }

                $http(config)
                    .then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    deferred.reject(error);
                });
                return deferred.promise;

            };

            this.post = function (data) {
                return this._doCall('POST', data);
            };

            this.postMultiPart = function (data, multipart) {
                return this._doCall('POST', data, multipart);
            };

            var getData = null;
            var getPromise = null;
            this.get = function (data, force) {
                if (force || getPromise == null || !angular.equals(getData, data)) {
                    getData = data;
                    getPromise = this._doCall('GET', data);
                } else {
                    // use local promise
                }
                return getPromise;
            };

            this.put = function (data) {
                return this._doCall('PUT', data);
            };

            this.patch = function (data) {
                return this._doCall('PATCH', data);
            };

            this['delete'] = function (data) {
                return this._doCall('DELETE', data);
            };

            this.abort = function () {
                if (this.timeout != null) {
                    //console.log('aborting');
                    this.aborted = true;
                    this.timeout.resolve();
                }
            };

        };

        return RestRequest;

    }]);
