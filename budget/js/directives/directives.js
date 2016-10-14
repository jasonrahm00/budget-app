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

//Editable Form Fields Directive
budgetApp.directive('editFields', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'budget/templates/edit-fields.html'
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

