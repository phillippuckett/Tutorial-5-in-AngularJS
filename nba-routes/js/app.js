var app = angular.module('nbaRoutes', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    // routing configuration code

});
