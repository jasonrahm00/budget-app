budgetApp.controller('ledgerController', ['$scope', '$window', 'ledgerFactory', function ($scope, $window, ledgerFactory) { 

  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }

}]);