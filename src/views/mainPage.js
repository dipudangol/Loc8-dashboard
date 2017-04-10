angular.module('MyApp')
    .controller('AppCtrl', ['$scope', '$rootScope', '$http', '$auth', 'logout', 'loginUrl', function ($scope, $rootScope, $http, $auth, logout, loginUrl) {
       
        var getCarUrl = loginUrl + "/car";
        var requestpartUrl = loginUrl + "/requestpart";
        var requestprofileUrl = loginUrl + "/profile";


        $rootScope.clearToken = function () {
            logout.logoutFunction();
        }

        $http({
            method: 'GET',
            url: getCarUrl,
            data: $scope.car
        }).then(function successCallback(response) {
            $scope.numberOfCar = response.data.length;
        }, function errorCallback(response) {
        });
        $http({
            method: 'GET',
            url: requestpartUrl,
            data: $scope.car
        }).then(function successCallback(response) {
            $scope.numberOfPartsRequest = response.data.length;
        }, function errorCallback(response) {
        });
        
        $http({
            method: 'GET',
            url: requestprofileUrl,
            data: $scope.car
        }).then(function successCallback(response) {
            $scope.profile = response.data;
        }, function errorCallback(response) {
        });
    }]);
