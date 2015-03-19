var app = angular.module(
    'splash-header',
    [
        require('social-button-directive')
    ]
);

app.directive("splashHeader", function() {
    return {
        restrict: 'E',
        templateUrl: "ng-modules/splashHeader/splashHeader.html"
    };
});