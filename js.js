    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var AzureBuilder = angular.module('AzureBuilder', ['ngMaterial', 'ngMessages', 'chart.js']);
    AzureBuilder.controller('AzureCtrl', function ($scope, $http,$mdDialog) {

      $scope.labels = ["Health", "Reload", "Firepower", "Torpedo", "Speed", "Anti Air", "Air Power", "Oil Usage", "Anti Sub"];
      $scope.EqType = {};
      $scope.TotalEquip={
        health: 0,
        reload: 0,
        firepower: 0,
        torpedo: 0,
        speed: 0,
        anti_air:0,
        air_power:0,
        oil_usage:0,
        anti_sub:0
      }
      $scope.stats = {
        health: {
          base: 0,
          equip: 0,
          total: 0
        },
        reload: {
          base: 0,
          equip: 0,
          total: 0
        },
        firepower: {
          base: 0,
          equip: 0,
          total: 0
        },
        torpedo: {
          base: 0,
          equip: 0,
          total: 0
        },
        speed: {
          base: 0,
          equip: 0,
          total: 0
        },
        anti_air: {
          base: 0,
          equip: 0,
          total: 0
        },
        air_power: {
          base: 0,
          equip: 0,
          total: 0
        },
        oil_usage: {
          base: 0,
          equip: 0,
          total: 0
        },
        anti_sub: {
          base: 0,
          equip: 0,
          total: 0
        }
      };
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

      $scope.$watch(function() {
        return angular.toJson([$scope.selectedShip, $scope.TotalEquip]);
      }, function () {
        if ($scope.selectedShip) {
          $scope.stats = {
            health: {
              base: $scope.selectedShip.max.health,
              equip: $scope.TotalEquip.health,
              total: ($scope.selectedShip.max.health + $scope.TotalEquip.health)
            },
            reload: {
              base: $scope.selectedShip.max.reload,
              equip: $scope.TotalEquip.reload,
              total: ($scope.selectedShip.max.reload + $scope.TotalEquip.reload)
            },
            firepower: {
              base: $scope.selectedShip.max.firepower,
              equip: $scope.TotalEquip.firepower,
              total: ($scope.selectedShip.max.firepower + $scope.TotalEquip.firepower)
            },
            torpedo: {
              base: $scope.selectedShip.max.torpedo,
              equip: $scope.TotalEquip.torpedo,
              total: ($scope.selectedShip.max.torpedo + $scope.TotalEquip.torpedo)
            },
            speed: {
              base: $scope.selectedShip.max.speed,
              equip: $scope.TotalEquip.speed,
              total: ($scope.selectedShip.max.speed + $scope.TotalEquip.speed)
            },
            anti_air: {
              base: $scope.selectedShip.max.anti_air,
              equip: $scope.TotalEquip.anti_air,
              total: ($scope.selectedShip.max.anti_air + $scope.TotalEquip.anti_air)
            },
            air_power: {
              base: $scope.selectedShip.max.air_power,
              equip: $scope.TotalEquip.air_power,
              total: ($scope.selectedShip.max.air_power + $scope.TotalEquip.air_power)
            },
            oil_usage: {
              base: $scope.selectedShip.max.oil_usage,
              equip: $scope.TotalEquip.oil_usage,
              total: ($scope.selectedShip.max.oil_usage + $scope.TotalEquip.oil_usage)
            },
            anti_sub: {
              base: $scope.selectedShip.max.anti_sub,
              equip: $scope.TotalEquip.anti_sub,
              total: ($scope.selectedShip.max.anti_sub + $scope.TotalEquip.anti_sub)
            }
          }
        }else{
          $scope.TotalEquip={
            health: 0,
            reload: 0,
            firepower: 0,
            torpedo: 0,
            speed: 0,
            anti_air:0,
            air_power:0,
            oil_usage:0,
            anti_sub:0
          }
          $scope.stats = {
            health: {
              base: 0,
              equip: 0,
              total: 0
            },
            reload: {
              base: 0,
              equip: 0,
              total: 0
            },
            firepower: {
              base: 0,
              equip: 0,
              total: 0
            },
            torpedo: {
              base: 0,
              equip: 0,
              total: 0
            },
            speed: {
              base: 0,
              equip: 0,
              total: 0
            },
            anti_air: {
              base: 0,
              equip: 0,
              total: 0
            },
            air_power: {
              base: 0,
              equip: 0,
              total: 0
            },
            oil_usage: {
              base: 0,
              equip: 0,
              total: 0
            },
            anti_sub: {
              base: 0,
              equip: 0,
              total: 0
            }
          };
          $scope.selectedFirstEq = undefined;
          $scope.selectedSecondEq = undefined;
          $scope.selectedThirdEq = undefined;
          $scope.selectedFourthEq = undefined;
          $scope.selectedFifthEq = undefined;
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

      $scope.ProcessEquip = function(equip,OldEquip){
        if(OldEquip){
        $scope.TotalEquip.health -= OldEquip.health;
        $scope.TotalEquip.reload -= OldEquip.reload;
        $scope.TotalEquip.firepower -= OldEquip.firepower;
        $scope.TotalEquip.torpedo -= OldEquip.torpedo;
        $scope.TotalEquip.speed -= OldEquip.speed;
        $scope.TotalEquip.anti_air -= OldEquip.anti_air;
        $scope.TotalEquip.air_power -= OldEquip.air_power;
        $scope.TotalEquip.oil_usage -= OldEquip.oil_usage;
        $scope.TotalEquip.anti_sub -= OldEquip.anti_sub;
        }
        $scope.TotalEquip.health += equip.health;
        $scope.TotalEquip.reload += equip.reload;
        $scope.TotalEquip.firepower += equip.firepower;
        $scope.TotalEquip.torpedo += equip.torpedo;
        $scope.TotalEquip.speed += equip.speed;
        $scope.TotalEquip.anti_air += equip.anti_air;
        $scope.TotalEquip.air_power += equip.air_power;
        $scope.TotalEquip.oil_usage += equip.oil_usage;
        $scope.TotalEquip.anti_sub += equip.anti_sub;
        console.log($scope.TotalEquip);
      }

      $scope.SelectEquip = function(equip,index){
        switch (index) {
          case 1:
          $scope.ProcessEquip(equip,$scope.selectedFirstEq? $scope.selectedFirstEq : false);
          $scope.selectedFirstEq = equip;
          break;
          case 2:
          $scope.ProcessEquip(equip,$scope.selectedSecondEq? $scope.selectedSecondEq : false);
          $scope.selectedSecondEq = equip;
          break;
          case 3:
          $scope.ProcessEquip(equip,$scope.selectedThirdEq? $scope.selectedThirdEq : false);
          $scope.selectedThirdEq = equip;
          break;
          case 4:
          $scope.ProcessEquip(equip,$scope.selectedFourthEq? $scope.selectedFourthEq : false);
          $scope.selectedFourthEq = equip;
          break;
          case 5:
          $scope.ProcessEquip(equip,$scope.selectedFifthEq? $scope.selectedFifthEq : false);
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