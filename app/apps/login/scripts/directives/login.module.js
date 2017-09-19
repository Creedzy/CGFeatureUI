/* jshint -W097 */
'use strict';
/**
 * Created by nas on 12/5/2016.
 */

angular.module('loginApp',['commonFactoriesModule','oc.lazyLoad','ui.router','ui.bootstrap','angular-loading-bar'])

    .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

        $urlRouterProvider.otherwise('/login');
        console.log(angular.module('loginApp').requires);
        $stateProvider
            .state('login',{
                templateUrl:'/apps/login/partials/login.html',
                url:'/login',              
            });

    }]);

