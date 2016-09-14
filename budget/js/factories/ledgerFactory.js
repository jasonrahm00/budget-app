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
  
  ledger.addNewEntry = function(payeeSource, amount, category, date) {
    this.entries.push({
      "ledgerId": createLedgerEntryId(),
      "payeeSource": payeeSource,
      "amount": amount,
      "category": category,
      "date": date
    });
    return this; 
  }
  
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

  return ledger;
    
});