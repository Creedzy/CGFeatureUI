/**
 * Created by nas on 2/11/2017.
 */

module.exports = function (config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [

            './node_modules/angular/angular.js',                             // angular
            './node_modules/angular-ui-router/release/angular-ui-router.js', // ui-router
            './bower_components/jquery/dist/jquery.js',
            './bower_components/angular-bootstrap/ui-bootstrap.min.js',
            './bower_components/angular-loading-bar/build/loading-bar.min.js',
            './bower_components/oclazyload/dist/oclazyLoad.js',
            './node_modules/angular-mocks/angular-mocks.js',
            'app/scripts/app.js',

        ],

        // list of files to exclude
        exclude: [
        ],

        // test results reporter to use
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};