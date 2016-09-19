(function() {
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', ['$scope', function($scope) {
      $scope.messageText = '';

      $scope.clickLunch = function() {
        if ($scope.lunch_menu === undefined) {
           $scope.messageText = 'Please enter data first';
           $scope.messageText_style = {"color":"red"}
           $scope.lunch_menu_style = {"border-color":"red"};
        }
        else {
          var numero = $scope.lunch_menu.split(',');
          if (numero === '') {
            $scope.lunch_menu_style = {"border-color":"green"};
            $scope.messageText_style = {"color":"green"}
            $scope.messageText = 'Please enter data first';
          }
          else if (numero.length <=3 )
            $scope.messageText = 'Enjoy!';
          else
            $scope.messageText = 'Too much!';
        }

      }
   }])
})();
