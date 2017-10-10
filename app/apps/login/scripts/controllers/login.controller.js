/* jshint -W097 */
'use strict';
/**
 * Created by nas on 12/5/2016.
 */


angular.module('loginApp').controller('LoginMainController',['$scope','UserFactory',function ($scope,UserFactory){ 
    console.log(angular.module('commonFactoriesModule'));
    $scope.vars = {};
    $scope.forms = {};
    $scope.vars.username = null;
    $scope.vars.password = null;
    $scope.vars.error = null;
    $scope.vars.errormessage = null;
    $scope.login = function () {
        
        if($scope.forms.loginPassword.password.$valid && $scope.forms.loginPassword.username.$valid) {
            console.log('valid');
            var user = new UserFactory($scope.vars.username);
            $scope.vars.user = user;
            user.login($scope.vars.username,$scope.vars.password)
            .then(function () {
            console.log('success');
            window.location.reload(true);
            },function (data) {
            console.log('fail');
            $scope.vars.error = true;
            $scope.vars.errormessage = data.errormessage;
            });
        } else {
            console.log('invalid');
        }
    };


}]);