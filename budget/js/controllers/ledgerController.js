/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

budgetApp.controller('ledgerController', ['$scope', 'catFactory', 'ledgerFactory', function ($scope, catFactory, ledgerFactory) {
  
  "use strict";
  
  $scope.ledgerCategories;
  
  catFactory.getLedgerCategories()
    .then(function(response) {
      $scope.ledgerCategories = response.data;
    }, function(error) {
      console.log(error.message);
  });
    
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  $scope.totalExpenses; $scope.totalIncome; $scope.remainingFunds; $scope.ledgerId; $scope.payeeSource; $scope.amount; $scope.selectedCategory; $scope.date; $scope.ledger;
  
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
      
  /***************** removeLedgerEntry Function **************************/
  /* 
    This function removes the targeted income or expense object when the delete button is clicked for that entry. The function accepts entryType and ledgerId as arguments. The first set of if/else statments test the entryType while the subsequent for loop iterates over the matching array and the nested if statement searches each object in the array for one with a matching ledgerId to the one you are trying to delete. If a match is found, that object is removed from the array. Finally the calcualteExpenses() function is called to update the total expenses variable.
  */
    
  $scope.removeEntry = function (ledgerId) {
    $scope.ledger = ledgerFactory.removeEntry(ledgerId);
  }
  
}]);