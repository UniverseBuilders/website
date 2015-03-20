require('angular');
console.log('1:', str.APP_NAME());
require('str');
console.log('2:', str.APP_NAME());

var app = angular.module('header-navbar', []);

app.directive("navHeader", function() {
    return {
        restrict: 'E',
        templateUrl: "ng-modules/navHeader/navHeader.html"
    };
});

module.exports = angular.module('header-navbar').name;