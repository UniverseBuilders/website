require('angular');

var app = angular.module('app-footer', []);

app.directive("appFooter", function() {
    return {
        restrict: 'E',
        templateUrl: "ng-modules/appFooter/appFooter.html"
    };
});

module.exports = angular.module('app-footer').name;