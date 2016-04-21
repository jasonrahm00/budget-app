personalWebsite.controller('budgetController', ['$scope', '$uibModal', function ($scope, $uibModal) {
  
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  $scope.bills = [
    {
      category: 'Cell Phone', 
      payee: 'Verizon', 
      amount: 100
    },
    {
      category: 'Credit Card', 
      payee: 'Commerce Bank', 
      amount: 250
    }
  ]; 
  
  $scope.billCategories = ['Rent', 'Credit Card', 'Internet', 'Life Insurance', 'Car Insurance', 'Restaurant', 'Entertainment', 'Miscellaneous', 'Savings', 'Groceries', 'Student Loans', 'Cell Phone', 'Mortgage', 'Investments', 'Retirement', 'Health Insurance', 'Gasoline', 'Utilities'];
  
  /**************************
    FUNCTIONS
  **************************/
  
  //Calculate total expenses using functional programming .reduce and shorthand (y = current bill being iterated over)
  var calculateExpenses = function () {
    $scope.totalExpenses = $scope.bills.reduce((x,y) => x + y.amount, 0);
  }; 
  
  //Call the calculateExpenses function when the controller loads to gain the inital value if there are defaults set in the $scope.bills array
  calculateExpenses();
  
  //Add New Expense by pushing the values to the bills array and resetting the values in the form to empty afterwards. Also the calculate expenses function is triggered to update that value everywhere
  $scope.addNewExpense = function () {
    $scope.bills.push({category:$scope.selectedCategory, payee: $scope.payee, amount: $scope.amount, date: $scope.date});
    $scope.payee = '';
    $scope.amount = '';
    $scope.selectedCategory = '';
    $scope.date = '';
    calculateExpenses();
  };
    
  //Remove Expense by targeting the index of the bill you want to delete
  $scope.removeExpense = function (bill) {
    var index = $scope.bills.indexOf(bill);
    $scope.bills.splice(index,1);
    calculateExpenses();
  };
  
  //This function opens the ui.bootstrap modal
  $scope.openModal = function (payee) {      
    
    var billToEdit;
    
    for(var i = 0; i < $scope.bills.length; i += 1) {
      if($scope.bills[i].payee === payee) {
        var billToEdit = $scope.bills[i];
      }
    }
    
    //Opening the modal creates a modal instance which has an open() method into which you can pass various properties
    var modalInstance = $uibModal.open({
      backdrop: 'static', // Static setting prevents you from closing modal when clicking on backdrop
      controller: 'expenseEditController', //A separate controller is needed for the actual modal instance
      templateUrl: '/templates/expense-edit.html', //The template for the modal window
      resolve: {
        bill: function () {
          return billToEdit;
        }
      }
    });
    
  };  
  
}]);