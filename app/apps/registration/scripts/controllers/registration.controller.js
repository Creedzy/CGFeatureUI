/**
 * Created by nas on 6/13/2017.
 */

angular.module('registrationApp').controller('RegistrationMainController',['$scope','$http','vcRecaptchaService',function ($scope,$http,vcRecaptchaService){

    $scope.user = {};
    $scope.user.myRecaptchaResponse = '';
    $scope.user.password = null;
    $scope.recaptchaInvalid = false;
    $scope.successfulRegistration = false;
    $scope.submitForm = function () {
        console.log($scope.user.myRecaptchaResponse);
        if($scope.user.myRecaptchaResponse === '')
        {
            $scope.recaptchaInvalid = true;
        } else {
            $scope.recaptchaInvalid = false;
            console.log('submitting2',$scope.user);
            $http({
                method  : 'POST',
                url     : '/registration',
                data    : $scope.user, //forms user object
                headers : {'Content-Type': 'application/json'}
            }).success(function(data) {
                if (data.errors) {
                    // Showing errors.
                    $scope.errorName = data.errors.name;
                    $scope.errorUserName = data.errors.username;
                    $scope.errorEmail = data.errors.email;
                } else {
                    $scope.message = data.message;
                    $scope.successfulRegistration = true;
                }
            })
        }

    };

}]);