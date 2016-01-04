var app = angular.module('mini-routing', ['ui.router'])
    .config(function ($stateprovider, $stateRouterProvider) {
        
        /**STATE PROVIDER*/
        $stateProvider
        /**declare the name of the state "home"*/
            .state('home', {
                templateUrl: '/js/home/homeTmpl.html',
                controller: 'homeCtrl',
                url: '/'
            })
            
        /**declare the name of the state "settings"*/
            .state('settings', {
                templateUrl: '/js/settings/settingsTmpl.html',
                controller: 'settingsCtrl',
                url: '/settings'
            })
            
        /**declare the name of the state "products"*/
            .state('products', {
                url: '/products/:id',
                templateUrl: 'js/products/productTmpl.html',
                controller: 'productsCtrl'
            });
        /**URL ROUTE PROVIDER*/
        $urlRouterProvider
            .otherwise('/');
    });