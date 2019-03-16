    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var AzureBuilder = angular.module('AzureBuilder', ['ngMaterial', 'ngMessages','chart.js']);
    AzureBuilder.controller('AzureCtrl',function($scope, $http){

      $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

      $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
      ];


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


