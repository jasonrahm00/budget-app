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
budgetApp.directive('budgetTable', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'budget/templates/budget-table.html'
  };
});

//Lightbox Directive
budgetApp.directive('lightboxDirective', function() {
  return {
    restrict: 'E', // applied on 'element',
    replace: true,
    templateUrl: 'budget/templates/lightbox-template.html'
  }
});