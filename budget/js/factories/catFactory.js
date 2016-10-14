budgetApp.factory('catFactory', ['$http', function($http){

  'use strict';
  
  var catData = {};
  
  catData.getLedgerCategories = function() {
    return $http.get('budget/js/data/ledgerCategories.json');
  }

  return catData;  
  
}]);