/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

budgetApp.controller('ledgerController', ['$scope', 'catFactory', 'ledgerFactory', function ($scope, catFactory, ledgerFactory) {
  
  "use strict";
  
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  $scope.totalExpenses; $scope.totalIncome; $scope.remainingFunds; $scope.payeeSource; $scope.amount; $scope.selectedCategory; $scope.date; $scope.ledger; $scope.ledgerCategories;
  
  //Get ledgery categories from data file and assign values to the legderCategories scope variable
  catFactory.getLedgerCategories()
    .then(function(response) {
      $scope.ledgerCategories = response.data;
    }, function(error) {
      console.log(error.message);
  });

  /**************************
    FUNCTIONS
  **************************/
  
  //jQuery UI Datepicker
  $(function() {
    $("input[type=date]").datepicker();
  });
  
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
    
  /***************** addNewEntry Function **************************/

  $scope.newLedgerEntry = function () {
    if(!checkAmount($scope.amount)) {
      alert ("Please add an Amount")
    } else {
      $scope.ledger = ledgerFactory.addNewEntry(
        $scope.payeeSource, 
        $scope.amount, 
        $scope.selectedCategory, 
        $scope.date
      );
      resetValues();
    }
  };
  
  //The reusable resetValues() function clears all of the data in the expense/income creation form once the new object is created
  var resetValues = function() {
    $scope.amount = null;
    $scope.date = '';
    $scope.payeeSource = '';
    $scope.selectedCategory = '';
  }
  
  //The checkAmount function is called whenever a new expense or income entry is added.
  //The function runs the parseInt() method on the input field value. If nothing or a negative value is entered, the function will evaluate to false and trigger an alert box
  function checkAmount(x) {
    if(parseInt(x) >= 0) {
      return true;
    } else {
      return false;
    }
  }  
      
  /***************** removeLedgerEntry Function **************************/
      
  $scope.removeEntry = function (ledgerId) {
    $scope.ledger = ledgerFactory.removeEntry(ledgerId);
  }
  
}]);