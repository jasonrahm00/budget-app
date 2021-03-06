/***********************************************
  MAIN BUDGET CONTROLLER
***********************************************/

angular.module('budgetApp').controller('ledgerCtrl', function ($scope, catFactory, ledgerFactory) {
  
  'use strict';
  
  var availableCategories;
  
  $scope.amount; 
  $scope.date;
  $scope.editing = false;
  $scope.entryType = "";
  $scope.entryToEdit = {};
  $scope.ledger = ledgerFactory; 
  $scope.ledgerCategories = [];
  $scope.vendor; 
  $scope.selectedCategory;
  $scope.showLightbox = false;
  
  /******************************************************************
                          FUNCTIONS
  ******************************************************************/
  
  $scope.getTemplate = function() {
    return 'budget/templates/ledger-row.html';
  };
  
  //Get ledgery categories from data file and assign values to the legderCategories scope variable
  catFactory.getLedgerCategories()
    .then(function(response) {
      availableCategories = response.data;
    }, function(error) {
      console.log(error.message);
  });
  
  //jQuery UI Datepicker
  jQuery(function() {
    jQuery("input[type=date]").datepicker();
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
    $scope.vendor = '';
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
  $scope.addEntry = function () {
    if(!checkAmount($scope.amount)) {
      alert ("Please add an Amount")
    }else if($scope.entryType === "") {
      alert ("Please select an entry type")
    } else {
      $scope.ledger = ledgerFactory.addNewEntry(
        $scope.vendor, 
        $scope.amount, 
        $scope.selectedCategory, 
        $scope.date,
        $scope.entryType
      );
      resetValues();
    }
  };
  
  /***************** Edit/Save Functions **************************/
  
  $scope.saveEdit = function() {
    ledgerFactory.saveEdit();
  };
  
  $scope.openLightbox = function(entry) {
    $scope.entryToEdit = entry;
    $scope.showLightbox = true;
  };
  
  $scope.closeLightbox = function() {
    $scope.entryToEdit = {};
    ledgerFactory.saveEdit();
    $scope.showLightbox = false;
  };
  
  /***************** removeLedgerEntry Function **************************/   
  $scope.removeEntry = function (ledgerId) {
    if($scope.showLightbox = true) {
      $scope.entryToEdit = {};
      $scope.showLightbox = false;
    }     
    $scope.ledger = ledgerFactory.removeEntry(ledgerId);
  };
  
});