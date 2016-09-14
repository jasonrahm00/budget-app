budgetApp.factory('ledgerFactory', function() {
  
  var ledgerEntryId = 100;
  
  var ledger = {
    "totalExpenses": 0,
    "totalIncome": 0,
    "remainingFunds": 0,
    "entries": []
  };

  function createLedgerEntryId () {
    var newId = 0;
    newId = ledgerEntryId += 1;
    return newId;
  }
  
  /***************** addNewEntry Function **************************/
  //Takes form data as inputs and pushes a new object to the ledger.entries array
  
  ledger.addNewEntry = function(payeeSource, amount, category, date, entryType) {
    this.entries.push({
      "ledgerId": createLedgerEntryId(),
      "entryType": entryType,
      "payeeSource": payeeSource,
      "amount": amount,
      "category": category,
      "date": date
    });
    return this; 
  }
  
  /***************** removeLedgerEntry Function **************************/
  //Takes ledgerId and searches ledger.entries array for matching object then removes that entrie from the array
  
  ledger.removeEntry = function(ledgerId) {
    for(var i = 0; i < this.entries.length; i++) {
      var entry = this.entries[i];
      if(entry.ledgerId === ledgerId) {
        ledger.entries.splice(i, 1);
      } else {
        console.log("Error with removeLedgerEntry() if/else statements");
      }
    }
    return this;
  }

  //Return ledger value from factory
  return ledger;
    
});