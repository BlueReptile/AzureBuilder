    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var AzureBuilder = angular.module('AzureBuilder', ['ngMaterial', 'ngMessages','chart.js']);
    AzureBuilder.controller('AzureCtrl',function($scope, $http){

      $scope.labels =["Health", "Reload", "Firepower", "Torpedo", "Speed", "Anti Air", "Air Power","Oil Usage","Anti Sub"];

      $scope.stats = {};

      $scope.$watch('selectedItem', function() {
        if($scope.selectedItem){
          $scope.stats = {
            health: {
              base: $scope.selectedItem.max.health,
              equip: 1000,
              total: ($scope.selectedItem.max.health + 1000)
            },
            reload: {
              base: $scope.selectedItem.max.reload,
              equip: 0,
              total: $scope.selectedItem.max.reload + 0
            },
            firepower: {
              base: $scope.selectedItem.max.firepower,
              equip: 0,
              total: $scope.selectedItem.max.firepower + 0
            },
            torpedo: {
              base: $scope.selectedItem.max.torpedo,
              equip: 0,
              total: $scope.selectedItem.max.torpedo + 0
            },
            speed: {
              base: $scope.selectedItem.max.speed,
              equip: 0,
              total: $scope.selectedItem.max.speed + 0
            },
            anti_air: {
              base: $scope.selectedItem.max.anti_air,
              equip: 0,
              total: $scope.selectedItem.max.anti_air + 0
            },
            oil_usage: {
              base: $scope.selectedItem.max.oil_usage,
              equip: 0,
              total: $scope.selectedItem.max.oil_usage + 0
            },
            anti_sub: {
              base: $scope.selectedItem.max.anti_sub,
              equip: 0,
              total: $scope.selectedItem.max.anti_sub + 0
            }
          }
        }

      });

  $scope.query = function(searchText) {
    return $http
      .get('https://al-shipgirls.pw/shipyard/ship_info_detailed?search=' + searchText)
      .then(function(data) {
        $scope.results = [];
        data.data.forEach(element => {
        $scope.results.push(element.item);
        });
        return $scope.results;
      });
  };
});


