require('angular');

var app = angular.module('header-navbar', []);

app.directive("navHeader", function() {
    return {
        restrict: 'E',
        templateUrl: "ng-modules/navHeader/navHeader.html",
        scope:{
            name: '@',
            strings: '=',
            stringstwo: '='
        }
    };
});

module.exports = angular.module('header-navbar').name;