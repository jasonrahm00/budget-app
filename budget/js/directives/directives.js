//Datepicker Directive
budgetApp.directive("datepicker", function () {
  return {
    restrict: "AEC",
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
  };
});

//Ledger Form Directive
budgetApp.directive('ledgerForm', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'budget/templates/ledger-form.html'
  };
});

//Budget Table Directive
budgetApp.directive('budgetTable', function($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div ng-include="templateUrl"></div>',
    link: function(scope) {
      
      $window.onresize = function() {
        changeTemplate();
        scope.$apply();
      };
      
      changeTemplate();
      
      function changeTemplate() {
        var screenWidth = $window.innerWidth;
        if (screenWidth < 768) {
          scope.templateUrl = 'budget/templates/mobile-budget-table.html';
        } else if (screenWidth >= 768) {
          scope.templateUrl = 'budget/templates/budget-table.html';
        }
      }
    }
  }
});

//Lightbox Directive
budgetApp.directive('editLightbox', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'budget/templates/edit-lightbox.html'
  }
});