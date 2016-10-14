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
budgetApp.directive('ledgerform', function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'budget/templates/ledger-form.html'
  };
});