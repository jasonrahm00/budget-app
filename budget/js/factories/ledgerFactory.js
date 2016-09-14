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

  return ledger;
    
});