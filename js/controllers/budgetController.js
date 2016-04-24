/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

personalWebsite.controller('budgetController', ['$scope', '$uibModal', function ($scope, $uibModal) {
  
  /**************************
    VARIABLE DECLARATIONS
  **************************/
  
  var ledgerEntryIds = [];
  
  $scope.bills = [
    {
      billId: createLedgerEntryId(),
      billCategory: {
        name: 'Cell Phone'
      }, 
      payee: 'Verizon', 
      amount: 100
    },
    {
      billId: createLedgerEntryId(),
      billCategory: {
        name: 'Credit Card'
      },  
      payee: 'Bank', 
      amount: 250
    }
  ]; 
  
  $scope.billCategories = [ 
    {
      group: 'Living Expenses',
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
      name: 'Car Insurance',
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
      group: 'Living Expenses',
      name: 'Groceries'
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
      group: 'Living Expenses',
      name: 'Utilities'
    },
    {
      group: 'Commute',
      name: 'Gasoline'
    }
  ];
  
  /**************************
    FUNCTIONS
  **************************/
  
  //jQuery tab method used to trigger navigation to each tab
  $(function() {
    $( "#tabs" ).tabs();
  });
  
  //Calculate total expenses using functional programming .reduce and shorthand (y = current bill being iterated over)
  var calculateExpenses = function () {
    $scope.totalExpenses = $scope.bills.reduce((x,y) => x + y.amount, 0);
  }; 
  
  //Call the calculateExpenses function when the controller loads to gain the inital value if there are defaults set in the $scope.bills array
  calculateExpenses();
  
  //Generate unique ID for each bill so it can be referenced when editing
  function createLedgerEntryId () {
    var newId = Math.floor(Math.random() * 10000);
    if(ledgerEntryIds.indexOf(newId) > -1) {
      createLedgerEntryId();
    } else {
      ledgerEntryIds.push(newId);
      return newId;
    }
  }  
  
  //Add New Expense by pushing the values to the bills array and resetting the values in the form to empty afterwards. Also the calculate expenses function is triggered to update that value everywhere
  $scope.addNewExpense = function () {
    $scope.billId = createLedgerEntryId();
    $scope.bills.push({billId: $scope.billId, billCategory: $scope.selectedCategory, payee: $scope.payee, amount: $scope.amount, date: $scope.date});
    $scope.billId = '';
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
  //Payee is passed in from the click funcion on the button
  $scope.openModal = function (billId) {      
    
    var billToEdit;
    
    //Iterate over every object in the bills array to find the object with a matching bill Id
    //If the bill Ids match, the object is assigned to the billToEdit category to be used in the modal.open() method and passed to the modal for editing
    for(var i = 0; i < $scope.bills.length; i += 1) {
      if($scope.bills[i].billId === billId) {
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