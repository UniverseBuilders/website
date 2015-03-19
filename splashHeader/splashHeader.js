(function(){
    var app = angular.module('splash-header', ['social-button-directive']);

    app.directive("splashHeader", function() {
        return {
            restrict: 'E',
            templateUrl: "splashHeader/splashHeader.html"
        };
    });
})();