angular.module('MyApp')
    .controller('editCar', ['$scope', '$rootScope', '$http', '$auth', 'loginUrl', '$stateParams', function ($scope, $rootScope, $http, $auth, loginUrl, $stateParams) {
        console.log($stateParams.carid, "###########")
        var postacar = loginUrl + "/car/"

        $scope.editcars = function () {
            $scope.editcardetail = {}
            $http({
                method: 'GET',
                url: postacar + $stateParams.carid
            }).then(function successCallback(response) {
                $scope.editcardetail = response.data
            }, function errorCallback(response) {
            });
        }
        

        $scope.UpdateCar = function () {
            $http({
                method: 'PUT',
                url: postacar + $stateParams.carid,
                data: $scope.editcardetail
            }).then(function successCallback(response) {
            }, function errorCallback(response) {
            });
        }

        $scope.editcars();
    }]);


