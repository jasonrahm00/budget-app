budgetApp.factory('ledgerFactory', ['$http', function($http){
  
  var catData = {};
  
  catData.getLedgerCategories = function() {
    return $http.get('budget/js/data/ledgerCategories.json');
  }

  return catData;
  
}]);