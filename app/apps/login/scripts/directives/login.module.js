/**
 * Created by nas on 12/5/2016.
 */
angular.module('loginApp',[  'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'commonFactoriesModule'])

    .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login',{
                templateUrl:'/apps/login/partials/login.html',
                controller:'LoginMainController',
                url:'/login'
            })

    }]);

