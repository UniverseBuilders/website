var app = angular.module(
    'splash-header',
    [
        'social-button-directive'
//        require('social-button-directive')
    ]
);

app.directive("splashHeader", function() {
    return {
        restrict: 'E',
        templateUrl: "ng-modules/splashHeader/splashHeader.html"
    };
});