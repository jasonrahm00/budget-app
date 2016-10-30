angular.module('budgetApp').controller('reportCtrl', function ($scope, $window, ledgerFactory) { 
  
  'use strict';
  
  $scope.ledger = ledgerFactory;

  $scope.totalEntries = ledgerFactory.entries.length;
  
  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }

});