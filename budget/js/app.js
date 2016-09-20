var budgetApp = angular.module('budgetApp', ['ui.router']);

budgetApp.directive("datepicker", function () {
  return {
    restrict: "A",
    require: "ngModel",
    link: function (scope, elem, attrs, ngModelCtrl) {
      var updateModel = function (dateText) {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(dateText);
        });
      };
      var options = {
        onSelect: function (dateText) {
          updateModel(dateText);
        }
      };
      elem.datepicker(options);
    }
  }
});

//Capitalize Filter
budgetApp.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});

//ROUTES

budgetApp.config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('ledger', {
      url: '/',
      templateUrl: 'views/ledger.html',
      controller: 'ledgerController'
    })
    .state('report', {
      url: '/report',
      templateUrl: 'views/report.html',
      controller: 'reportController'
    });
  
  $urlRouterProvider.otherwise('/');
  
}]);