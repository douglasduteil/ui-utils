'use strict';
angular.module('ui.indeterminate', []).directive('uiIndeterminate', [function () {
    return {
      compile: function (tElm, tAttrs) {
        if (!tAttrs.type || tAttrs.type.toLowerCase() !== 'checkbox') {
          return angular.noop;
        }
        return function ($scope, elm, attrs) {
          $scope.$watch(attrs.uiIndeterminate, function (newVal) {
            elm[0].indeterminate = !!newVal;
          });
        };
      }
    };
  }]);