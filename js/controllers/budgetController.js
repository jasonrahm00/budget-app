/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

personalWebsite.controller('budgetController', ['$scope', '$uibModal', function ($scope, $uibModal) {
  
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  $scope.totalExpenses; $scope.totalIncome; $scope.remainingFunds; $scope.ledgerId; $scope.payee; $scope.amount; $scope.selectedCategory; $scope.date; $scope.incomeSource;
  
  $scope.ledgerEntryId = 100;
  
  $scope.income = [];
  
  $scope.bills = [
    {
      ledgerId: createLedgerEntryId(),
      category: {
        group: 'Living Expenses',
        name: 'Cell Phone'
      }, 
      payee: 'Verizon', 
      amount: 100
    },
    {
      ledgerId: createLedgerEntryId(),
      category: {
        group: 'Debt',
        name: 'Credit Card'
      },  
      payee: 'Bank', 
      amount: 250
    }
  ]; 
  
  $scope.billCategories = [ 
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
    }
  ]
  
  /**************************
    FUNCTIONS
  **************************/
  
  //jQuery tab method used to trigger navigation to each tab
  $(function() {
    $( "#tabs" ).tabs();
  });
  
  //Calculate total expenses using functional programming .reduce and shorthand (y = current object being iterated over)
  var calculateExpenses = function () {
    $scope.totalExpenses = $scope.bills.reduce((x,y) => x + y.amount, 0);
    $scope.totalIncome = $scope.income.reduce((x,y) => x + y.amount, 0);
    $scope.remainingFunds = $scope.totalIncome - $scope.totalExpenses;
  }; 
  
  //Call the calculateExpenses function when the controller loads to gain the inital value if there are default bills/sources of income set
  calculateExpenses();
  
  //The reusable resetValues() function clears all of the data in the bill/income creation form once the new object is created
  var resetValues = function() {
    $scope.amount = null;
    $scope.ledgerId = '';
    $scope.date = '';
    $scope.incomeSource = '';
    $scope.payee = '';
    $scope.selectedCategory = '';
  }
  
  //The checkAmount function is called whenever a new bill or income entry is added.
  //The function runs the parseInt() method on the input field value. If nothing or a negative value is entered, the function will evaluate to false and trigger an alert box
  var checkAmount = function (x) {
    if(parseInt(x) > 0) {
      return true;
    } else {
      return false;
    }
  }  
  
  //Generate unique ID for each ledger entry (bill/source of income) so it can be referenced when editing
  function createLedgerEntryId () {
    var newId = 0;
    newId = $scope.ledgerEntryId += 1;
    return newId;
  }  
  
  /***************** newLedgerEntry Function **************************/
  /*  
    The newLedgerEntry function takes an 'entryType' string that is passed via the function call on the HTML 'Add' button; 'income' and 'bill' are the two possible types, currently. 
    Before anything else happens, the checkAmount() function is called to test whether an amount ($scope.amount) has been entered into the input field. The calculateExpenses function is expecting a number value from the amount intput. If nothing is entered, the field returns 'unassigned' which will break the calculate function, so an alert tells the user to enter an amount, if it is left blank. 
    When checkAmount evaluates to true, the function then creates a unique ledger entry ID by calling the createLedgerEntryID() function and assigns that value to the ledgerId variable.
    Then, nested if/else statements use the injected entryType to determine whether a new bill or new income object is being created. The object is then pushed to the appropriate array, the calculateExpenses function updates the summary table and the resetValues function clears the form fields.  
  */
  
  var pushNewBill = function () {
    return $scope.bills.push({ledgerId: $scope.ledgerId, category: $scope.selectedCategory, payee: $scope.payee, amount: $scope.amount, date: $scope.date});
  }
  
  var pushNewIncome = function () {
    return $scope.income.push({ledgerId: $scope.ledgerId, category: $scope.selectedCategory, incomeSource: $scope.incomeSource, amount: $scope.amount, date: $scope.date});
  }
  
  $scope.newLedgerEntry = function (entryType) {
    if(!checkAmount($scope.amount)) {
      alert ("Please add an Amount")
    } else {
      $scope.ledgerId = createLedgerEntryId();
      if(entryType === 'bill' || entryType === 'income') {
        if(entryType === 'bill') {
          pushNewBill();
          calculateExpenses();
          resetValues();
        } else if (entryType ==='income') {
          pushNewIncome();
          calculateExpenses();
          resetValues();
        } else {
          resetValues();
          console.log('The nested if/else statements testing the injected values (bill or income) failed.');
        }
      } else {
        console.log('Error with newLedgerEntry function.');
      }
    }
  };
      
  /***************** removeLedgerEntry Function **************************/
  /* 
    This function removes the targeted income or expense objet when the delete button is clicked for that entry. The function accepts a ledgerEntry argument that is a string being passed by the click method on the Delete button. The argument tests whether the entry type is a bill or an income source and it's index is recorded by the subsequent indexOf() method. A series of if/else statments then check whether the entry type is bill or income and slices that entry from the necessary object array. After the entry is removed, the calculateExpenses function fires to update the summary tables.
  */
  
  $scope.removeLedgerEntry = function (ledgerEntry) {
    var billIndex = $scope.bills.indexOf(ledgerEntry);
    var incomeIndex = $scope.income.indexOf(ledgerEntry);
    if(ledgerEntry === 'bill') {
      $scope.bills.splice(billIndex,1);
    } else if (ledgerEntry === 'income') {
      $scope.income.splice(incomeIndex,1);
    } else {
      console.log("Error with removeLedgerEntry if/else statements");
    }
    calculateExpenses();
  }
  
  //This function opens the ui.bootstrap modal
  //The unique billId is passed in from the click function on the 'Edit' button
  $scope.openModal = function (ledgerId) {
    
    var billToEdit;
    
    //Iterate over every object in the bills array to find the object with a matching bill Id
    //If the bill Ids match, the object is assigned to the billToEdit category to be used in the modal.open() method and passed to the modal for editing
    for(var i = 0; i < $scope.bills.length; i += 1) {
      if($scope.bills[i].ledgerId === ledgerId) {
        var billToEdit = $scope.bills[i];
      }
    }
    
    //Opening the modal creates a modal instance which has an open() method into which you can pass various properties
    var modalInstance = $uibModal.open({
      backdrop: 'static', //Static setting prevents you from closing modal when clicking on backdrop
      controller: 'expenseEditController', //A separate controller is needed for the actual modal instance
      templateUrl: 'templates/expense-edit.html', //The template for the modal window
      resolve: {
        bill: function () { //The billToEdit object is assigned to 'bill' which is passed to the modal instance controller as a dependency
          return billToEdit;
        },
        categories: function () {
          return $scope.billCategories;
        }
      }
    });
    
  }; 
  
}]);


/***********************************************
  MODAL INSTANCE CONTROLLER
***********************************************/

personalWebsite.controller('expenseEditController', ['$scope', '$uibModalInstance', 'bill', 'categories', function ($scope, $uibModalInstance, bill, categories) {
  
  //The bill object from the modal open function is assigned to the scope so the values can be displayed and edited
  $scope.bill = bill;
  
  $scope.billCategories = categories;
  
  $scope.saveClose = function () {  
    $uibModalInstance.dismiss('cancel');
  };
  
}]);