budgetApp.controller('reportController', ['$scope', '$window', 'ledgerFactory', function ($scope, $window, ledgerFactory) { 

  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }
  
  $scope.ledger = ledgerFactory;

}]);