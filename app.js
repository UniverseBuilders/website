/* global FastClick, smoothScroll */
var app = angular.module(
    'ng-boot-boiler-demo',
    ['ui.bootstrap', 'ngTouch', 'social-button-directive', 'header-navbar'],
    function($httpProvider){
        FastClick.attach(document.body);
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
).run(['$location', function($location){
    //Allows us to navigate to the correct element on initialization
    if ($location.path() !== '' && $location.path() !== '/') {
        smoothScroll(document.getElementById($location.path().substring(1)), 500, function(el) {
            location.replace('#' + el.id);
        });
    }
}]);

app.controller('MainCtrl', function($scope, $http, $document, $modal, orderByFilter) {
    $scope.showBuildModal = function() {
        var modalInstance = $modal.open({
            templateUrl: 'buildModal.html',
            controller: 'SelectModulesCtrl',
            resolve: {
                modules: function(buildFilesService) {
                    return buildFilesService.getModuleMap()
                        .then(function (moduleMap) {
                            return Object.keys(moduleMap);
                        });
                }
            }
        });
    };

    $scope.showDownloadModal = function() {
        var modalInstance = $modal.open({
            templateUrl: 'downloadModal.html',
            controller: 'DownloadCtrl'
        });
    };
});

/*
 * The following compatibility check is from:
 *
 * Bootstrap Customizer (http://getbootstrap.com/customize/)
 * Copyright 2011-2014 Twitter, Inc.
 *
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */
var isOldBrowser;
(function () {

    var supportsFile = (window.File && window.FileReader && window.FileList && window.Blob);
    function failback() {
        isOldBrowser = true;
    }
    /**
     * Based on:
     *   Blob Feature Check v1.1.0
     *   https://github.com/ssorallen/blob-feature-check/
     *   License: Public domain (http://unlicense.org)
     */
    var url = window.webkitURL || window.URL; // Safari 6 uses "webkitURL".
    var svg = new Blob(
        ['<svg xmlns=\'http://www.w3.org/2000/svg\'></svg>'],
        { type: 'image/svg+xml;charset=utf-8' }
    );
    var objectUrl = url.createObjectURL(svg);

    if (/^blob:/.exec(objectUrl) === null || !supportsFile) {
        // `URL.createObjectURL` created a URL that started with something other
        // than "blob:", which means it has been polyfilled and is not supported by
        // this browser.
        failback();
    } else {
        angular.element('<img/>')
            .on('load', function () {
                isOldBrowser = false;
            })
            .on('error', failback)
            .attr('src', objectUrl);
    }

})();