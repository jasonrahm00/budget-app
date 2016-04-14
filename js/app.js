var personalWebsite = angular.module('personalWebsite', ['ngAnimate', 'ui.bootstrap', 'ui.router' ]);

/*  Changes the root scope to match the new view state when the state changes allowing me to dynamically update page header components by adding them to the data object in the view states below.
    Solution from the Coderwall Website: https://coderwall.com/p/zk7qww/dynamic-site-page-titles-with-angular-and-ui-router */

personalWebsite.run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function() {
    $rootScope.$state = $state;
  })
})

//ROUTES

personalWebsite.config(['$stateProvider', '$urlRouterProvider',  function ($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
    // View states for main pages linked in Nav
  
    .state('home', {
      url: '',
      templateUrl: 'views/home.html',
      controller: 'homePageController',
      data: {
        title: 'Jason Rahm',
        description: 'This website was custom-built by Jason Rahm to showcase his work history and talents.'
      }
    })
    .state('resume', {
      url: '/resume',
      templateUrl: 'views/resume.html',
      controller: 'resumeController',
      data: {
        title: 'Jason Rahm\'s Resume',
        description: 'See Jason\'s work and education history and his current skillset.'
      }
    })
    .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'views/portfolio.html',
      controller: 'portfolioController',
      data: {
        title: 'Jason Rahm\'s Portfolio',
        description: 'Peruse a sample of Jason\'s work.'
      }
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      data: {
        title: 'Contact Jason Rahm',
        description: 'Fill out the form to send an email to Jason Rahm.'
      }
    })
    .state('budget', {
        url: '/budget',
        templateUrl: 'views/budget.html',
        controller: 'budgetController',
        data: {
          title: 'Budget Application',
          description: 'Determine a monthly budget based on your income and expected bills.'
        }
      });
  
  $urlRouterProvider.otherwise('/');
  
}]);