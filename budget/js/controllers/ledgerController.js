/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

budgetApp.controller('ledgerController', ['$scope', 'catFactory', 'ledgerFactory', function ($scope, catFactory, ledgerFactory) {
  
  "use strict";
  
  var availableCategories;
  
  $scope.amount; 
  $scope.date; 
  $scope.entryType = "";
  $scope.ledger = ledgerFactory; 
  $scope.ledgerCategories = [];
  $scope.payeeSource; 
  $scope.selectedCategory;
  
  /******************************************************************
                          FUNCTIONS
  ******************************************************************/
  
  //Get ledgery categories from data file and assign values to the legderCategories scope variable
  catFactory.getLedgerCategories()
    .then(function(response) {
      availableCategories = response.data;
    }, function(error) {
      console.log(error.message);
  });
  
  //jQuery UI Datepicker
  $(function() {
    $("input[type=date]").datepicker();
  });

  //The checkAmount function is called whenever a new expense or income entry is added.
  //The function runs the parseInt() method on the input field value. If nothing or a negative value is entered, the function will evaluate to false and trigger an alert box
  function checkAmount(x) {
    if(parseInt(x) >= 0) {
      return true;
    } else {
      return false;
    }
  }  
  
  //The reusable resetValues() function clears all of the data in the entry creation form once the new object is created
  function resetValues() {
    $scope.amount = null;
    $scope.date = '';
    $scope.payeeSource = '';
    $scope.selectedCategory = '';
  }
  
  //Watcher used to update ledgerCategories dropdown when entryType changes
  $scope.$watch('entryType', function(newValue, oldValue) {
    if(newValue !== oldValue) {
      if(newValue === 'expense') {
        $scope.ledgerCategories = availableCategories.expenseCategories;
      } else {
        $scope.ledgerCategories = availableCategories.incomeCategories;
      }
    } else {
      $scope.ledgerCategories = [];
    }
  });
    
  /***************** addNewEntry Function **************************/
  $scope.newLedgerEntry = function () {
    if(!checkAmount($scope.amount)) {
      alert ("Please add an Amount")
    }else if($scope.entryType === "") {
      alert ("Please select an entry type")
    } else {
      $scope.ledger = ledgerFactory.addNewEntry(
        $scope.payeeSource, 
        $scope.amount, 
        $scope.selectedCategory, 
        $scope.date,
        $scope.entryType
      );
      resetValues();
    }
  };
   
  /***************** removeLedgerEntry Function **************************/   
  $scope.removeEntry = function (ledgerId) {
    $scope.ledger = ledgerFactory.removeEntry(ledgerId);
  }
  
}]);