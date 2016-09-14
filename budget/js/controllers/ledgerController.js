/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

budgetApp.controller('ledgerController', ['$scope', '$window', 'ledgerFactory', function ($scope, $window, ledgerFactory) {
  
  "use strict";
  
  $scope.ledgerCategories;
  
  ledgerFactory.getLedgerCategories()
    .then(function(response) {
      $scope.ledgerCategories = response.data;
    }, function(error) {
      console.log(error.message);
  });
    
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  $scope.totalExpenses; $scope.totalIncome; $scope.remainingFunds; $scope.ledgerId; $scope.payeeSource; $scope.amount; $scope.selectedCategory; $scope.date;
  
  $scope.ledgerEntryId = 100;

  $scope.ledger = [];  
  
  /**************************
    FUNCTIONS
  **************************/
  
  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }
  
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
    $scope.ledgerId = '';
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
  
  //Generate unique ID for each ledger entry (expense/source of income) so it can be referenced when editing
  function createLedgerEntryId () {
    var newId = 0;
    newId = $scope.ledgerEntryId += 1;
    return newId;
  }
  
  /***************** newLedgerEntry Function **************************/
  /*  
    The newLedgerEntry function takes an 'entryType' string that is passed via the function call on the HTML 'Add' button; 'income' and 'expense' are the two possible types, currently. 
    Before anything else happens, the checkAmount() function is called to test whether an amount ($scope.amount) has been entered into the input field. The calculateExpenses function is expecting a number value from the amount intput. If nothing is entered, the field returns 'unassigned' which will break the calculate function, so an alert tells the user to enter an amount, if it is left blank. 
    When checkAmount evaluates to true, the function then creates a unique ledger entry ID by calling the createLedgerEntryID() function and assigns that value to the ledgerId variable.
    Then, nested if/else statements use the injected entryType to determine whether a new expense or new income object is being created. The object is then pushed to the appropriate array, the calculateExpenses function updates the summary table and the resetValues function clears the form fields.  
  */
  
  var pushNewEntry = function () {
    return $scope.ledger.push({ledgerId: $scope.ledgerId, category: $scope.selectedCategory, payeeSource: $scope.payeeSource, amount: $scope.amount, date: $scope.date});
  }
  
  $scope.newLedgerEntry = function () {
    if(!checkAmount($scope.amount)) {
      alert ("Please add an Amount")
    } else {
      $scope.ledgerId = createLedgerEntryId();
      pushNewEntry();
      resetValues();
    }
  };
      
  /***************** removeLedgerEntry Function **************************/
  /* 
    This function removes the targeted income or expense object when the delete button is clicked for that entry. The function accepts entryType and ledgerId as arguments. The first set of if/else statments test the entryType while the subsequent for loop iterates over the matching array and the nested if statement searches each object in the array for one with a matching ledgerId to the one you are trying to delete. If a match is found, that object is removed from the array. Finally the calcualteExpenses() function is called to update the total expenses variable.
  */
    
  $scope.removeLedgerEntry = function (ledgerId) {
    var ledger = $scope.ledger;
    for(var i = 0; i < ledger.length; i += 1) {
      if (ledger[i].ledgerId === ledgerId) {
        ledger.splice(i, 1);
      } else {
        console.log("Error with removeLedgerEntry() if/else statements");
      }
    }
  }
  
}]);