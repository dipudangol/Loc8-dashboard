angular.module('MyApp')
.controller('AddaCar', ['$scope', '$rootScope', '$http', '$auth','loginUrl', function ($scope, $rootScope, $http, $auth,loginUrl) {

  $scope.car = {
    car_registration: "aaaaaaa",
    car_colour: "aaaaaaaaaaaaaa",
    car_colour_code: "aaaaaaaaaaaaa",
    car_engine: "aaaaaaaaaaaaa",
    car_make: "aaaaaaaaaaaaa",
    car_model: "aaaaaaaaaaaaaaaaa",
    car_transmission: "aaaaaaaaaaaaaaaaaaaaaaaaa",
    car_trim: "aaaaaaaaaaaaaaaaa",
    car_variant: "aaaaaaaaaaaaaaaa",
    car_year_manuf: "aaaaaaaaaaaaaaaaaaaaaa",
    car_year_reg: "aaaaaaaaaaaaaaaaaaa",
    co2Emissions: "aaaaaaaaaaaaaaaa",
    mot: "aaaaaaaaaaaaaaa",
    motDetails: "aaaaaaaaaaaaaaaa",
    revenueWeight: "aaaaaaaa",
    sixMonthRate: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    taxDetails: "aaaaaaaaaaaaaaaaaaaa",
    taxStatus: "aaaaaaaaaaa",
    taxed: "aaaaaaa",
    twelveMonthRate: "aaaaaaaaaaaaaaaaaaaaaaaaa",
    typeApproval: "aaaaaaaaaaaaaaaa",
    wheelPlan: "aaaaaaaaaaaaaa",
    car_fuel: "aaaaaaaaaaa"
  };

  $scope.addCar = function () {
      var postacar=loginUrl + "/car";

    // post to get cars in garage:
    $http({
      method: 'POST',
      url: postacar,
      data: $scope.car
    }).then(function successCallback(response) {
    }, function errorCallback(response) {
    });
  }

}]);