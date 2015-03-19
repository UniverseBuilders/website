(function(){
    var app = angular.module('app-footer', []);

    app.directive("appFooter", function() {
        return {
            restrict: 'E',
            templateUrl: "appFooter/appFooter.html"
        };
    });
})();