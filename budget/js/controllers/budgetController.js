/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

budgetApp.controller('budgetController', ['$scope', '$window', '$uibModal', function ($scope, $window, $uibModal) {
  
  "use strict";
  
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  var date = new Date();
  var firstOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  
  $scope.totalExpenses; $scope.totalIncome; $scope.remainingFunds; $scope.ledgerId; $scope.payeeSource; $scope.amount; $scope.selectedCategory; $scope.date;
  
  $scope.ledgerEntryId = 100;

  $scope.ledger = [
    // Expenses array $scope.ledger[0]
    [],
    // Income array $scope.ledger[1]
    [
      {
        "ledgerId": 100,
        "category": {
          "group": "Initial",
          "name": "Carryover Balance"
        },
        "payeeSource": "Previous Month",
        "amount": 0,
        "date": firstOfMonth
      }
    ],
    // Spending array $scope.ledger[2]
    []
  ];
  
  var expenses = $scope.ledger[0];
  
  var income = $scope.ledger[1];
  
  $scope.expenseCategories = [ 
    {
      group: 'Housing',
      name: 'Rent'
    },
    {
      group: 'Debt',
      name: 'Credit Card'
    },
    {
      group: 'Living Expenses',
      name: 'Internet'
    },
    {
      group: 'Insurance',
      name: 'Life Insurance'
    },
    {
      group: 'Insurance',
      name: 'Car Insurance'
    },
    {
      group: 'Social',
      name: 'Restaurant'
    },
    {
      group: 'Social',
      name: 'Entertainment'
    },
    {
      group: 'Miscellaneous',
      name: 'Miscellaneous'
    },
    {
      group: 'Investment',
      name: 'Savings'
    },
    {
      group: 'Living Expenses',
      name: 'Groceries'
    },
    {
      group: 'Debt',
      name: 'Studen Loans'
    },
    {
      group: 'Living Expenses',
      name: 'Cell Phone'
    },
    {
      group: 'Investment',
      name: 'Retirement'
    },
    {
      group: 'Insurance',
      name: 'Health Insurance'
    },
    {
      group: 'Housing',
      name: 'Utilities'
    },
    {
      group: 'Travel',
      name: 'Gasoline'
    },
    {
      group: 'Housing',
      name: 'Mortgage'
    }
  ];
  
  $scope.incomeCategories = [
    {
      group: 'Salary',
      name: 'Pay Check'
    },
    {
      group: 'Investments',
      name: 'Dividends'
    },
    {
      group: 'Investments',
      name: 'Sale of Stock'
    },
    {
      group: 'Assistance',
      name: 'Family'
    },
    {
      group: 'Retirement',
      name: '401k/IRA Payments'
    },
    {
      group: 'Retirement',
      name: 'Social Security'
    },
    {
      group: 'Assistance',
      name: 'Welfare'
    },
    {
      group: 'Assistance',
      name: 'Unemployment'
    },
    {
      group: 'Investments',
      name: 'Property Sale'
    },
    {
      group: 'Miscellaneous',
      name: 'Miscellaneous'
    },
    {
      group: 'Assistance',
      name: 'Disability Insurance'
    },
    {
      group: 'Salary',
      name: 'Business Income'
    },
    {
      group: 'Initial',
      name: 'Carryover Balance'
    }
  ]
  
  /**************************
    FUNCTIONS
  **************************/
  
  //jQuery tab method used to trigger navigation to each tab
  $(function() {
    $( "#tabs" ).tabs();
  });
  
  //Print Window
  $scope.printReport = function() { 
    $window.print(); 
  }
  
  //jQuery UI Datepicker
  $(function() {
    $("input[type=date]").datepicker();
  });
  
  //Calculate total expenses using functional programming .reduce and shorthand (y = current object being iterated over)
  var calculateExpenses = function () {
    $scope.totalExpenses = expenses.reduce(function(x, y) {
      return x + y.amount
    },0);
    $scope.totalIncome = income.reduce(function(x, y) {
      return x + y.amount;
    },0);
    $scope.remainingFunds = $scope.totalIncome - $scope.totalExpenses;
  }; 
  
  //Call the calculateExpenses function when the controller loads to gain the inital value if there are default expenses/sources of income set
  calculateExpenses();
    
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
  
  var pushNewExpense = function () {
    return $scope.ledger[0].push({ledgerId: $scope.ledgerId, category: $scope.selectedCategory, payeeSource: $scope.payeeSource, amount: $scope.amount, date: $scope.date});
  }
  
  var pushNewIncome = function () {
    return $scope.ledger[1].push({ledgerId: $scope.ledgerId, category: $scope.selectedCategory, payeeSource: $scope.payeeSource, amount: $scope.amount, date: $scope.date});
  }
  
  $scope.newLedgerEntry = function (entryType) {
    if(!checkAmount($scope.amount)) {
      alert ("Please add an Amount")
    } else {
      $scope.ledgerId = createLedgerEntryId();
      if(entryType === 'expense' || entryType === 'income') {
        if(entryType === 'expense') {
          pushNewExpense();
          calculateExpenses();
          resetValues();
        } else if (entryType ==='income') {
          pushNewIncome();
          calculateExpenses();
          resetValues();
        } else {
          resetValues();
          console.log('The nested if/else statements testing the injected values (expense or income) failed.');
        }
      } else {
        console.log('Error with newLedgerEntry function.');
      }
    }
  };
      
  /***************** removeLedgerEntry Function **************************/
  /* 
    This function removes the targeted income or expense object when the delete button is clicked for that entry. The function accepts entryType and ledgerId as arguments. The first set of if/else statments test the entryType while the subsequent for loop iterates over the matching array and the nested if statement searches each object in the array for one with a matching ledgerId to the one you are trying to delete. If a match is found, that object is removed from the array. Finally the calcualteExpenses() function is called to update the total expenses variable.
  */
    
  $scope.removeLedgerEntry = function (entryType, ledgerId) {
    if (entryType === 'expense') {
      for(var i = 0; i < expenses.length; i += 1) {
        if (expenses[i].ledgerId === ledgerId) {
          expenses.splice(i, 1);
        }
      }
    } else if (entryType === 'income') {
      for(var i=0; i < income.length; i += 1) {
        if (income[i].ledgerId === ledgerId) {
          income.splice(i, 1);
        }
      }
    } else {
      console.log("Error with removeLedgerEntry() if/else statements");
    }
    calculateExpenses();
  }
  
  /***************** Open Modal Function **************************/
  /* 
    This function opens the ui.bootstrap modal
    The unique lederlId and entry type are passed in from the click function on the 'Edit' button
    If/Else statements check to see if the entryType is a expense or income and iterates over the matching array of objects to find the one that was clicked. That object is then assigned to the entryToEdit variable so it can bep passed to the modal.
    When the modal is opened, a separte intance is created with its own scope, so the various dependencies need to be assigned to that local scope to allow two-way-databinding with the main budget controller 
  */
  $scope.openModal = function (entryType, ledgerId) {
    
    var entryToEdit = [];
    
    if(entryType === 'expense') {
      for(var i = 0; i < expenses.length; i += 1) {
        if(expenses[i].ledgerId === ledgerId) {
          entryToEdit.push(expenses[i], 'expense');
        }
      }
    } else if (entryType === 'income') {
      for(var i = 0; i < income.length; i += 1) {
        if(income[i].ledgerId === ledgerId) {
          entryToEdit.push(income[i], 'income');
        }
      }
    } else {console.log('entryType is not properly being passed into the openModal function. Check the ng-click on the edit button to make sure the entryType is spelled correctly and is a lowercase string.')}
    
    //Opening the modal creates a modal instance which has an open() method into which you can pass various properties
    var modalInstance = $uibModal.open({
      backdrop: 'static', //Static setting prevents you from closing modal when clicking on backdrop
      controller: 'editLedgerController', //A separate controller is needed for the actual modal instance
      templateUrl: 'budget/templates/edit-ledger.html', //The template for the modal window
      resolve: {
        entry: function () { //The entryToEdit object is assigned to 'entry' which is passed to the modal instance controller as a dependency
          return entryToEdit;
        },
        deleteEntry: function () {
          return $scope.removeLedgerEntry;
        },
        expenseCategories: function () {
          return $scope.expenseCategories;
        },
        incomeCategories: function () {
          return $scope.incomeCategories;
        }
      }
    });
    
    //The result promise allows you to track when the modal closes, how it closes and execute behaviors.
    modalInstance.result.then(function () {
      calculateExpenses();
    });    
  }
  
}]);


/***********************************************
  MODAL INSTANCE CONTROLLER
***********************************************/

budgetApp.controller('editLedgerController', ['$scope', '$uibModalInstance', 'entry', 'deleteEntry', 'expenseCategories', 'incomeCategories', function ($scope, $uibModalInstance, entry, deleteEntry, expenseCategories, incomeCategories) {
  
  //The injected objects from the modal open function is assigned to the scope so the values can be displayed and edited
  $scope.removeLedgerEntry = deleteEntry;
  $scope.entry = entry[0];
  $scope.typeOfEntry = entry[1]; //Needs to be a string
  $scope.expenseCategories = expenseCategories;
  $scope.incomeCategories = incomeCategories;
  
  $scope.saveClose = function () {  
    $uibModalInstance.close();
  };
  
  $scope.delete = function (entryType, ledgerId) {
    $uibModalInstance.close($scope.removeLedgerEntry(entryType, ledgerId));
  };
    
}]);