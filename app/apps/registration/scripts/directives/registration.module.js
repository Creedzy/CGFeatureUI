/**
 * Created by nas on 6/13/2017.
 */
angular.module('registrationApp',[  'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'vcRecaptcha',
    'GC'])

    .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

        $urlRouterProvider.otherwise('/registration');

        $stateProvider
            .state('registration',{
                templateUrl:'/apps/registration/partials/registration.html',
                controller:'RegistrationMainController',
                url:'/registration'
            })

    }]);