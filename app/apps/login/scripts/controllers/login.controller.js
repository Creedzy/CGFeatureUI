/**
 * Created by nas on 12/5/2016.
 */
angular.module('loginApp').controller('LoginMainController',['$scope','UserFactory',function ($scope,User){

    $scope.vars = {};
    $scope.vars.username = null;
    $scope.vars.password = null;

    $scope.login = function () {
        if($scope.forms.loginPassword.password.$valid && $scope.forms.loginPassword.username.$valid) {
            $scope.vars.user = new User($scope.vars.username);
        }


    };


}]);