    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var AzureBuilder = angular.module('AzureBuilder', ['ngMaterial', 'ngMessages', 'chart.js']);
    AzureBuilder.controller('AzureCtrl', function ($scope, $http) {

      $scope.labels = ["Health", "Reload", "Firepower", "Torpedo", "Speed", "Anti Air", "Air Power", "Oil Usage", "Anti Sub"];

      $scope.stats = {};

      $scope.$watch('selectedShip', function () {
        if ($scope.selectedShip) {
          $scope.stats = {
            health: {
              base: $scope.selectedShip.max.health,
              equip: 200,
              total: ($scope.selectedShip.max.health + 200)
            },
            reload: {
              base: $scope.selectedShip.max.reload,
              equip: 12,
              total: $scope.selectedShip.max.reload + 12
            },
            firepower: {
              base: $scope.selectedShip.max.firepower,
              equip: 19,
              total: $scope.selectedShip.max.firepower + 19
            },
            torpedo: {
              base: $scope.selectedShip.max.torpedo,
              equip: 0,
              total: $scope.selectedShip.max.torpedo + 0
            },
            speed: {
              base: $scope.selectedShip.max.speed,
              equip: 0,
              total: $scope.selectedShip.max.speed + 0
            },
            anti_air: {
              base: $scope.selectedShip.max.anti_air,
              equip: 0,
              total: $scope.selectedShip.max.anti_air + 0
            },
            air_power: {
              base: $scope.selectedShip.max.air_power,
              equip: 0,
              total: $scope.selectedShip.max.air_power + 0
            },
            oil_usage: {
              base: $scope.selectedShip.max.oil_usage,
              equip: 0,
              total: $scope.selectedShip.max.oil_usage + 0
            },
            anti_sub: {
              base: $scope.selectedShip.max.anti_sub,
              equip: 0,
              total: $scope.selectedShip.max.anti_sub + 0
            }
          }
        }

      });

      $scope.query = function (searchText) {
        return $http
          .get('https://al-shipgirls.pw/shipyard/ship_info_detailed?search=' + searchText)
          .then(function (data) {
            $scope.results = [];
            data.data.forEach(element => {
              $scope.results.push(element.item);
            });
            return $scope.results;
          });
      };
    });