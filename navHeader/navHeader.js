(function(){
    var app = angular.module('header-navbar', []);

    app.directive("navHeader", function() {
        return {
            restrict: 'E',
            templateUrl: "navHeader/navHeader.html"
        };
    });
})();