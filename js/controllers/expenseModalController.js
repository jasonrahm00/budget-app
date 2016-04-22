personalWebsite.controller('expenseEditController', ['$scope', '$uibModalInstance', 'bill', function ($scope, $uibModalInstance, bill) {
  
  //The bill object from the modal open function is assigned to the scope so the values can be displayed and edited
  $scope.bill = bill;
  
  $scope.saveClose = function () {    
    $uibModalInstance.dismiss('cancel');
  };

}]);