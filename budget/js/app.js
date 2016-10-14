var budgetApp = angular.module('budgetApp', ['ui.router']);

budgetApp.run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
  })
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
      templateUrl: 'budget/views/ledger.html',
      controller: 'ledgerCtrl'
    })
    .state('report', {
      url: '/report',
      templateUrl: 'budget/views/report.html',
      controller: 'reportCtrl'
    });
  
  $urlRouterProvider.otherwise('/');
  
}]);