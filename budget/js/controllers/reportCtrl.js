budgetApp.controller('reportCtrl', ['$scope', '$window', 'ledgerFactory', function ($scope, $window, ledgerFactory) { 
  
  'use strict';
  
  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }
  
  $scope.ledger = ledgerFactory;

}]);