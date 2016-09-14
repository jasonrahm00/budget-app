budgetApp.controller('reportController', ['$scope', '$window', function ($scope, $window) { 

  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }

}]);