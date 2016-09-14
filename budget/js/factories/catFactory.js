budgetApp.factory('catFactory', ['$http', function($http){
  
  //Get category data
  var catData = {};
  
  catData.getLedgerCategories = function() {
    return $http.get('budget/js/data/ledgerCategories.json');
  }

  return catData;  
  
}]);