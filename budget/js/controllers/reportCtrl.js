budgetApp.controller('reportCtrl', ['$scope', '$window', 'ledgerFactory', function ($scope, $window, ledgerFactory) { 
  
  'use strict';
  
  $scope.ledger = ledgerFactory;

  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }

}]);