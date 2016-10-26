budgetApp.controller('reportCtrl', ['$scope', '$window', 'ledgerFactory', function ($scope, $window, ledgerFactory) { 
  
  'use strict';
  
  $scope.ledger = ledgerFactory;

  $scope.sortType = 'date';
  $scope.sortRevers = false;
  
  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }

}]);