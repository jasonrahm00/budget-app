angular.module('budgetApp').factory('catFactory', function($http){

  'use strict';
  
  var catData = {};
  
  catData.getLedgerCategories = function() {
    return $http.get('budget/data/ledgerCategories.json');
  }

  return catData;  
  
});