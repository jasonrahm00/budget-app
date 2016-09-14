budgetApp.controller('ledgerController', ['$scope', '$window', function ($scope, $window) { 

  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }

}]);