budgetApp.factory('ledgerFactory', function() {
  
  var ledgerEntryId = 100;
  
  var ledger = {
    "totalExpenses": 0,
    "totalIncome": 0,
    "remainingFunds": 0,
    "entries": []
  };

  //A unique entry ID is created whenever a new ledger entry is added. This makes it easy to reference individual entries and find the right one to edit/delete
  function createLedgerEntryId () {
    var newId = 0;
    newId = ledgerEntryId += 1;
    return newId;
  }
  
  //The calculateTotals() function is called every time a ledger entry is added, edited or removed. It loops over every entry, checks the entry type and adds the amount to the appropriate "expense" or "income" ledger property. Finally, the remaining funds is caluclted by subtracting the totalExpenses local variable form the totalIncome.
  function calculateTotals() {
    var totalIncome = 0;
    var totalExpenses = 0;
    for(var i = 0; i < ledger.entries.length; i++) {
      if(ledger.entries[i].entryType === 'income') {
        totalIncome += ledger.entries[i].amount;
      } else {
        totalExpenses += ledger.entries[i].amount;
      }
    }
    ledger.totalIncome = totalIncome;
    ledger.totalExpenses = totalExpenses;
    ledger.remainingFunds = totalIncome - totalExpenses;
  }
  
  /***************** addNewEntry Function **************************/
  //Takes form data as inputs and pushes a new object to the ledger.entries array
  //The parameters are provided by the call to the function in the controller
  //'this' refers to the entire ledger object
  ledger.addNewEntry = function(payeeSource, amount, category, date, entryType) {
    this.entries.push({
      "ledgerId": createLedgerEntryId(),
      "entryType": entryType,
      "payeeSource": payeeSource,
      "amount": amount,
      "category": category,
      "date": date
    });
    calculateTotals();
    return this; 
  }
  
  /***************** removeLedgerEntry Function **************************/
  //Takes ledgerId and searches ledger.entries array for matching object then removes that entry from the array  
  ledger.removeEntry = function(ledgerId) {
    for(var i = 0; i < this.entries.length; i++) {
      var entry = this.entries[i];
      if(entry.ledgerId === ledgerId) {
        ledger.entries.splice(i, 1);
      }
    }
    calculateTotals();
    return this;
  }

  //Return ledger value from factory
  return ledger;
    
});