    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var AzureBuilder = angular.module('AzureBuilder', ['ngMaterial', 'ngMessages', 'chart.js']);
    AzureBuilder.controller('AzureCtrl', function ($scope, $http, $mdDialog) {

      $scope.labels = ["Health", "Reload", "Firepower", "Torpedo", "Speed", "Anti Air", "Air Power", "Oil Usage", "Anti Sub"];
      $scope.EqType = {};
      $scope.TotalEquip = {
        health: 0,
        reload: 0,
        firepower: 0,
        torpedo: 0,
        speed: 0,
        anti_air: 0,
        air_power: 0,
        oil_usage: 0,
        anti_sub: 0
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
      $scope.equipaments = [{
        name: 'teste1',
        type: 'Auxiliary Equipment',
        image: 'https://azurlane.koumakan.jp/w/images/8/82/7320.png',
        health: 10,
        reload: 10,
        firepower: 10,
        torpedo: 10,
        speed: 10,
        anti_air: 10,
        air_power: 10,
        oil_usage: 10,
        anti_sub: 10
      }];

      $scope.$watch(function () {
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
        } else {
          $scope.TotalEquip = {
            health: 0,
            reload: 0,
            firepower: 0,
            torpedo: 0,
            speed: 0,
            anti_air: 0,
            air_power: 0,
            oil_usage: 0,
            anti_sub: 0
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

      $scope.showEquip = function (type, index) {
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

      $scope.ProcessEquip = function (equip, OldEquip) {
        if (OldEquip) {
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
      }

      $scope.SelectEquip = function (equip, index) {
        switch (index) {
          case 1:
            $scope.ProcessEquip(equip, $scope.selectedFirstEq ? $scope.selectedFirstEq : false);
            $scope.selectedFirstEq = equip;
            break;
          case 2:
            $scope.ProcessEquip(equip, $scope.selectedSecondEq ? $scope.selectedSecondEq : false);
            $scope.selectedSecondEq = equip;
            break;
          case 3:
            $scope.ProcessEquip(equip, $scope.selectedThirdEq ? $scope.selectedThirdEq : false);
            $scope.selectedThirdEq = equip;
            break;
          case 4:
            $scope.ProcessEquip(equip, $scope.selectedFourthEq ? $scope.selectedFourthEq : false);
            $scope.selectedFourthEq = equip;
            break;
          case 5:
            $scope.ProcessEquip(equip, $scope.selectedFifthEq ? $scope.selectedFifthEq : false);
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

      $scope.GetAllDestroyer = function () {
        return $http
          .get('https://cors-anywhere.herokuapp.com/https://azurlane.koumakan.jp/List_of_Destroyer_Guns')
          .then(function (data) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(data.data, 'text/html');
            let tables = htmlDoc.getElementsByClassName("tabbertab");
            let MaxTable = tables[1];
            let rows = MaxTable.getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
              let col = rows[i];
              let item = col.getElementsByTagName('td');
              let equipament = {};
              for (let index = 0; index < item.length; index++) {
                let element = item[index];
                switch (index) {
                  case 0:
                    equipament.name = element.innerText;
                    break;
                  case 1:
                    equipament.type = 'DD Main Guns';
                    break;
                  case 2:
                    equipament.image = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 3:
                    equipament.rarity = element.innerText;
                    break;
                  case 4:
                    equipament.nationality = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 5:
                    equipament.firepower = parseInt(element.innerText);
                    break;
                  case 6:
                    equipament.anti_air = parseInt(element.innerText);
                    break;
                  case 7:
                    equipament.damage = parseInt(element.innerText);
                    break;
                  case 8:
                    equipament.coef = element.innerText;
                    break;
                  case 9:
                    equipament.rate = element.innerText;
                    break;
                  case 10:
                    equipament.VTS = element.innerText;
                    break;
                  case 11:
                    equipament.reloadS = element.innerText;
                    break;
                  case 12:
                    equipament.DPSL = element.innerText;
                    break;
                  case 13:
                    equipament.DPSM = element.innerText;
                    break;
                  case 14:
                    equipament.DPSH = element.innerText;
                    break;
                  case 15:
                    equipament.range = element.innerText;
                    break;
                  case 16:
                    equipament.spread = element.innerText;
                    break;
                  case 17:
                    equipament.angle = element.innerText;
                    break;
                  case 18:
                    equipament.attribute = element.innerText;
                    break;
                  case 19:
                    equipament.ammo = element.innerText;
                    break;
                  case 20:
                    equipament.dropLoc = element.innerText;
                    break;
                  case 21:
                    equipament.notes = element.innerText;
                    equipament.air_power = 0;
                    equipament.anti_sub = 0;
                    equipament.health = 0;
                    equipament.oil_usage = 0;
                    equipament.reload = 0;
                    equipament.speed = 0;
                    equipament.torpedo = 0;
                    break;
                }
              }
              $scope.equipaments.push(equipament);
            }
          });
      };

      $scope.GetAllLightCruiser = function () {
        return $http
          .get('https://cors-anywhere.herokuapp.com/https://azurlane.koumakan.jp/List_of_Light_Cruiser_Guns')
          .then(function (data) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(data.data, 'text/html');
            let tables = htmlDoc.getElementsByClassName("tabbertab");
            let MaxTable = tables[1];
            let rows = MaxTable.getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
              let col = rows[i];
              let item = col.getElementsByTagName('td');
              let equipament = {};
              for (let index = 0; index < item.length; index++) {
                let element = item[index];
                switch (index) {
                  case 0:
                    equipament.name = element.innerText;
                    break;
                  case 1:
                    equipament.type = 'CL Main Guns';
                    break;
                  case 2:
                    equipament.image = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 3:
                    equipament.rarity = element.innerText;
                    break;
                  case 4:
                    equipament.nationality = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 5:
                    equipament.firepower = parseInt(element.innerText);
                    break;
                  case 6:
                    equipament.anti_air = parseInt(element.innerText);
                    break;
                  case 7:
                    equipament.damage = parseInt(element.innerText);
                    break;
                  case 8:
                    equipament.coef = element.innerText;
                    break;
                  case 9:
                    equipament.rate = element.innerText;
                    break;
                  case 10:
                    equipament.VTS = element.innerText;
                    break;
                  case 11:
                    equipament.reloadS = element.innerText;
                    break;
                  case 12:
                    equipament.DPSL = element.innerText;
                    break;
                  case 13:
                    equipament.DPSM = element.innerText;
                    break;
                  case 14:
                    equipament.DPSH = element.innerText;
                    break;
                  case 15:
                    equipament.range = element.innerText;
                    break;
                  case 16:
                    equipament.spread = element.innerText;
                    break;
                  case 17:
                    equipament.angle = element.innerText;
                    break;
                  case 18:
                    equipament.attribute = element.innerText;
                    break;
                  case 19:
                    equipament.ammo = element.innerText;
                    break;
                  case 20:
                    equipament.dropLoc = element.innerText;
                    break;
                  case 21:
                    equipament.notes = element.innerText;
                    equipament.air_power = 0;
                    equipament.anti_sub = 0;
                    equipament.health = 0;
                    equipament.oil_usage = 0;
                    equipament.reload = 0;
                    equipament.speed = 0;
                    equipament.torpedo = 0;
                    break;
                }
              }
              $scope.equipaments.push(equipament);
            }
          });
      };

      $scope.GetAllHeavyCruiser = function () {
        return $http
          .get('https://cors-anywhere.herokuapp.com/https://azurlane.koumakan.jp/List_of_Heavy_Cruiser_Guns')
          .then(function (data) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(data.data, 'text/html');
            let tables = htmlDoc.getElementsByClassName("tabbertab");
            let MaxTable = tables[1];
            let rows = MaxTable.getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
              let col = rows[i];
              let item = col.getElementsByTagName('td');
              let equipament = {};
              for (let index = 0; index < item.length; index++) {
                let element = item[index];
                switch (index) {
                  case 0:
                    equipament.name = element.innerText;
                    break;
                  case 1:
                    equipament.type = 'CA Main Guns';
                    break;
                  case 2:
                    equipament.image = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 3:
                    equipament.rarity = element.innerText;
                    break;
                  case 4:
                    equipament.nationality = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 5:
                    equipament.firepower = parseInt(element.innerText);
                    break;
                  case 6:
                    equipament.anti_air = parseInt(element.innerText);
                    break;
                  case 7:
                    equipament.damage = parseInt(element.innerText);
                    break;
                  case 8:
                    equipament.coef = element.innerText;
                    break;
                  case 9:
                    equipament.rate = element.innerText;
                    break;
                  case 10:
                    equipament.VTS = element.innerText;
                    break;
                  case 11:
                    equipament.reloadS = element.innerText;
                    break;
                  case 12:
                    equipament.DPSL = element.innerText;
                    break;
                  case 13:
                    equipament.DPSM = element.innerText;
                    break;
                  case 14:
                    equipament.DPSH = element.innerText;
                    break;
                  case 15:
                    equipament.range = element.innerText;
                    break;
                  case 16:
                    equipament.spread = element.innerText;
                    break;
                  case 17:
                    equipament.angle = element.innerText;
                    break;
                  case 18:
                    equipament.attribute = element.innerText;
                    break;
                  case 19:
                    equipament.ammo = element.innerText;
                    break;
                  case 20:
                    equipament.dropLoc = element.innerText;
                    break;
                  case 21:
                    equipament.notes = element.innerText;
                    equipament.air_power = 0;
                    equipament.anti_sub = 0;
                    equipament.health = 0;
                    equipament.oil_usage = 0;
                    equipament.reload = 0;
                    equipament.speed = 0;
                    equipament.torpedo = 0;
                    break;
                }
              }
              $scope.equipaments.push(equipament);
            }
          });
      };

      $scope.GetAllBattleship = function () {
        return $http
          .get('https://cors-anywhere.herokuapp.com/https://azurlane.koumakan.jp/List_of_Battleship_Guns')
          .then(function (data) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(data.data, 'text/html');
            let tables = htmlDoc.getElementsByClassName("tabbertab");
            let MaxTable = tables[1];
            let rows = MaxTable.getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
              let col = rows[i];
              let item = col.getElementsByTagName('td');
              let equipament = {};
              for (let index = 0; index < item.length; index++) {
                let element = item[index];
                switch (index) {
                  case 0:
                    equipament.name = element.innerText;
                    break;
                  case 1:
                    equipament.type = 'BB Main Guns';
                    break;
                  case 2:
                    equipament.image = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 3:
                    equipament.rarity = element.innerText;
                    break;
                  case 4:
                    equipament.nationality = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 5:
                    equipament.firepower = parseInt(element.innerText);
                    break;
                  case 6:
                    equipament.anti_air = parseInt(element.innerText);
                    break;
                  case 7:
                    equipament.damage = parseInt(element.innerText);
                    break;
                  case 8:
                    equipament.coef = element.innerText;
                    break;
                  case 9:
                    equipament.rate = element.innerText;
                    break;
                  case 10:
                    equipament.VTS = element.innerText;
                    break;
                  case 11:
                    equipament.reloadS = element.innerText;
                    break;
                  case 12:
                    equipament.DPSL = element.innerText;
                    break;
                  case 13:
                    equipament.DPSM = element.innerText;
                    break;
                  case 14:
                    equipament.DPSH = element.innerText;
                    break;
                  case 15:
                    equipament.range = element.innerText;
                    break;
                  case 16:
                    equipament.spread = element.innerText;
                    break;
                  case 17:
                    equipament.angle = element.innerText;
                    break;
                  case 18:
                    equipament.attribute = element.innerText;
                    break;
                  case 19:
                    equipament.ammo = element.innerText;
                    break;
                  case 20:
                    equipament.dropLoc = element.innerText;
                    break;
                  case 21:
                    equipament.notes = element.innerText;
                    equipament.air_power = 0;
                    equipament.anti_sub = 0;
                    equipament.health = 0;
                    equipament.oil_usage = 0;
                    equipament.reload = 0;
                    equipament.speed = 0;
                    equipament.torpedo = 0;
                    break;
                }
              }
              $scope.equipaments.push(equipament);
            }
          });
      };

      $scope.GetAllTorpedoes = function () {
        return $http
          .get('https://cors-anywhere.herokuapp.com/https://azurlane.koumakan.jp/List_of_Torpedoes')
          .then(function (data) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(data.data, 'text/html');
            let tables = htmlDoc.getElementsByClassName("tabbertab");
            let MaxTable = tables[1];
            let rows = MaxTable.getElementsByTagName('tr');
            for (let i = 0; i < rows.length; i++) {
              let col = rows[i];
              let item = col.getElementsByTagName('td');
              let equipament = {};
              for (let index = 0; index < item.length; index++) {
                let element = item[index];
                switch (index) {
                  case 0:
                    equipament.name = element.innerText;
                    break;
                  case 1:
                    equipament.image = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 2:
                    equipament.rarity = element.innerText;
                    break;
                  case 3:
                    equipament.nationality = (element.getElementsByTagName('img')[0].src + '').replace('https://bluereptile.github.io/', 'https://azurlane.koumakan.jp/');
                    break;
                  case 4:
                    equipament.torpedo = parseInt(element.innerText);
                    break;
                  case 5:
                    equipament.damage = parseInt(element.innerText);
                    break;
                  case 6:
                    equipament.coef = element.innerText;
                    break;
                  case 7:
                    equipament.rate = element.innerText;
                    break;
                  case 8:
                    equipament.reloadS = element.innerText;
                    break;
                  case 9:
                    equipament.DPSL = element.innerText;
                    break;
                  case 10:
                    equipament.DPSM = element.innerText;
                    break;
                  case 11:
                    equipament.DPSH = element.innerText;
                    break;
                    case 12:
                    console.log(element.innerText);
                    equipament.DPSLIT = element.innerText;
                    break;
                    case 13:
                    equipament.DPSMIT = element.innerText;
                    break;
                    case 14:
                    equipament.DPSHIT = element.innerText;
                    break;
                  case 15:
                    equipament.range = element.innerText;
                    break;
                  case 16:
                    equipament.spread = element.innerText;
                    break;
                  case 17:
                    equipament.angle = element.innerText;
                    break;
                  case 18:
                    equipament.attribute = element.innerText;
                    break;
                  case 19:
                    equipament.dropLoc = element.innerText;
                    break;
                  case 20:
                    equipament.notes = element.innerText;
                    equipament.air_power = 0;
                    equipament.anti_sub = 0;
                    equipament.health = 0;
                    equipament.oil_usage = 0;
                    equipament.reload = 0;
                    equipament.speed = 0;
                    equipament.firepower = 0;
                    equipament.type = 'Torpedoes';
                    equipament.anti_air = 0;
                    break;
                }
              }
              $scope.equipaments.push(equipament);
            }
          });
      };

      $scope.GetAllDestroyer();
      $scope.GetAllLightCruiser();
      $scope.GetAllHeavyCruiser();
      $scope.GetAllBattleship();
      $scope.GetAllTorpedoes();
    });