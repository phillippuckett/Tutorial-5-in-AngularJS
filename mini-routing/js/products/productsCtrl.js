angular.module('mini-routing')
    .controller('productsCtrl', function ($scope, productsService, $stateParams) {
        var socksOrShoes = $stateParams.id

        if (socksOrShoes === 'shoes') {
            $scope.products = productsService.shoeData;
        } else if (socksOrShoes === 'socks') {
            $scope.products = productsService.sockData;
        }
    });