angular.module('budgetApp', ['ui.router']);

angular.module('budgetApp').run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
  })
});

//Capitalize Filter
angular.module('budgetApp').filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});

//ROUTES
angular.module('budgetApp').config(function ($stateProvider, $urlRouterProvider) {
  
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
  
});