personalWebsite.controller('budgetController', ['$scope', function ($scope) {
  
  $scope.categories = ['Rent', 'Credit Card', 'Internet', 'Life Insurance', 'Car Insurance', 'Restaurant', 'Entertainment', 'Miscellaneous', 'Savings', 'Groceries', 'Student Loans', 'Cell Phone', 'Mortgage', 'Investments', 'Retirement', 'Medical Insurance', 'Gasoline', 'Utilities'];
  
  $scope.bills = [];
    
  //Calculate total expenses using functional programming .reduce and shorthand (y = current bill being iterated over)
  var calculateExpenses = function () {
      $scope.totalExpenses = $scope.bills.reduce((x,y) => x + y.amount, 0);
    }; 
  
  //Call the calculateExpenses function when the controller loads to gain the inital value if there are defaults set in the $scope.bills array
  calculateExpenses();

  //Add New Expense
  $scope.addNewExpense = function () {
    $scope.bills.push({category:$scope.selectedCategory, payee: $scope.payee, amount: $scope.amount, date: $scope.date});
    $scope.payee = '';
    $scope.amount = '';
    $scope.selectedCategory = '';
    $scope.date = '';
    calculateExpenses();
  };
    
  //Remove Expense
  $scope.removeExpense = function (bill) {
    var index = $scope.bills.indexOf(bill);
    $scope.bills.splice(index,1);
    calculateExpenses();
  };
  
}]);