budgetApp.controller('snapshotController', ['$scope', 'ledgerFactory', function ($scope, ledgerFactory) {
  
  "use strict";
  
  $scope.totalExpenses; $scope.totalIncome; $scope.remainingFunds;
  
  //Calculate total expenses using functional programming .reduce and shorthand (y = current object being iterated over)
  /*
  var calculateExpenses = function () {
    $scope.totalExpenses = expenses.reduce(function(x, y) {
      return x + y.amount
    },0);
    $scope.totalIncome = income.reduce(function(x, y) {
      return x + y.amount;
    },0);
    $scope.remainingFunds = $scope.totalIncome - $scope.totalExpenses;
  }; 
  */
  
  //Call the calculateExpenses function when the controller loads to gain the inital value if there are default expenses/sources of income set
  //calculateExpenses();
  
}]);