budgetApp.controller('snapshotController', ['$scope', 'ledgerFactory', function ($scope, ledgerFactory) {
  
  "use strict";
  
  $scope.ledger = ledgerFactory;
  
}]);