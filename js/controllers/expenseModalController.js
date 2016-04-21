personalWebsite.controller('expenseEditController', ['$scope', '$uibModalInstance', 'bill', function ($scope, $uibModalInstance, bill) {
  
  $scope.bill = bill;
  
  $scope.saveClose = function () {    
    $uibModalInstance.dismiss('cancel');
  };

}]);