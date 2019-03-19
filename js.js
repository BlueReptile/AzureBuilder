    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var AzureBuilder = angular.module('AzureBuilder', ['ngMaterial', 'ngMessages', 'chart.js']);
    AzureBuilder.controller('AzureCtrl', function ($scope, $http,$mdDialog) {

      $scope.labels = ["Health", "Reload", "Firepower", "Torpedo", "Speed", "Anti Air", "Air Power", "Oil Usage", "Anti Sub"];
      $scope.EqType = {};
      $scope.stats = {};
      $scope.equipaments = [
        {
          name:'teste1',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 10,
          reload: 10,
          firepower: 10,
          torpedo: 10,
          speed: 10,
          anti_air:10,
          air_power:10,
          oil_usage:10,
          anti_sub:10
        },
        {
          name:'teste2',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 15,
          reload: 15,
          firepower: 15,
          torpedo: 15,
          speed: 15,
          anti_air:15,
          air_power:15,
          oil_usage:15,
          anti_sub:15
        },
        {
          name:'teste3',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste4',
          type: 'Fighter',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste5',
          type: 'Dive Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste6',
          type: 'Torpedo Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste1',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 10,
          reload: 10,
          firepower: 10,
          torpedo: 10,
          speed: 10,
          anti_air:10,
          air_power:10,
          oil_usage:10,
          anti_sub:10
        },
        {
          name:'teste2',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 15,
          reload: 15,
          firepower: 15,
          torpedo: 15,
          speed: 15,
          anti_air:15,
          air_power:15,
          oil_usage:15,
          anti_sub:15
        },
        {
          name:'teste3',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste4',
          type: 'Fighter',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste5',
          type: 'Dive Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste6',
          type: 'Torpedo Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste1',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 10,
          reload: 10,
          firepower: 10,
          torpedo: 10,
          speed: 10,
          anti_air:10,
          air_power:10,
          oil_usage:10,
          anti_sub:10
        },
        {
          name:'teste2',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 15,
          reload: 15,
          firepower: 15,
          torpedo: 15,
          speed: 15,
          anti_air:15,
          air_power:15,
          oil_usage:15,
          anti_sub:15
        },
        {
          name:'teste3',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste4',
          type: 'Fighter',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste5',
          type: 'Dive Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste6',
          type: 'Torpedo Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste1',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 10,
          reload: 10,
          firepower: 10,
          torpedo: 10,
          speed: 10,
          anti_air:10,
          air_power:10,
          oil_usage:10,
          anti_sub:10
        },
        {
          name:'teste2',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 15,
          reload: 15,
          firepower: 15,
          torpedo: 15,
          speed: 15,
          anti_air:15,
          air_power:15,
          oil_usage:15,
          anti_sub:15
        },
        {
          name:'teste3',
          type: 'Auxiliary Equipment',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste4',
          type: 'Fighter',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste5',
          type: 'Dive Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
        {
          name:'teste6',
          type: 'Torpedo Bomber',
          image:'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
          health: 20,
          reload: 20,
          firepower: 20,
          torpedo: 20,
          speed: 20,
          anti_air:20,
          air_power:20,
          oil_usage:20,
          anti_sub:20
        },
      ];

      $scope.$watch('selectedShip', function () {
        if ($scope.selectedShip) {
          $scope.stats = {
            health: {
              base: $scope.selectedShip.max.health,
              equip: 0,
              total: ($scope.selectedShip.max.health + 0)
            },
            reload: {
              base: $scope.selectedShip.max.reload,
              equip: 0,
              total: $scope.selectedShip.max.reload + 0
            },
            firepower: {
              base: $scope.selectedShip.max.firepower,
              equip: 0,
              total: $scope.selectedShip.max.firepower + 0
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

      $scope.showEquip = function(type,index) {
        console.log(type);
        $scope.EqType.type = type;
        $scope.EqType.index = index;
        $mdDialog.show({
          contentElement: '#myStaticDialog',
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          escapeToClose: true
        });
      };

      $scope.SelectEquip = function(equip,index){
        switch (index) {
          case 1:
          $scope.selectedFirstEq = equip;
          break;
          case 2:
          $scope.selectedSecondEq = equip;
          break;
          case 3:
          $scope.selectedThirdEq = equip;
          break;
          case 4:
          $scope.selectedFourthEq = equip;
          break;
          case 5:
          $scope.selectedFifthEq = equip;
          break;
        
          default:
          console.log("no equip index, oof");
          break;
        }
        $mdDialog.hide({
          contentElement: '#myStaticDialog',
          parent: angular.element(document.body)
        });
      }
    });