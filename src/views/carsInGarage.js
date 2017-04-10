angular.module('MyApp')
    .controller('carsInGarage', ['$scope', '$rootScope', '$http', '$auth', 'loginUrl', function ($scope, $rootScope, $http, $auth, loginUrl) {

        var postacar = loginUrl + "/car/";

        // post to get cars from garage:
        $scope.getcarinGarage = function () {
            $http({
                method: 'GET',
                url: postacar
            }).then(function successCallback(response) {
                $scope.carsinGarage = response.data
            }, function errorCallback(response) {
            });
        }

        $scope.getcarinGarage();

        // post to delete cars in garage:
        $scope.deleteCarInGarage = function (carid) {
            $http({
                method: 'DELETE',
                url: postacar + carid
            }).then(function successCallback(response) {
            }, function errorCallback(response) {
            });
            $scope.getcarinGarage();
        }

    }]);


