budgetApp.controller('snapshotCtrl', ['$scope', 'ledgerFactory', function ($scope, ledgerFactory) {
  
  'use strict';
  
  $scope.ledger = ledgerFactory;
  
}]);