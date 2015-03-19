require('angular');
require('fastclick');
require('smoothScroll');

/* global FastClick, smoothScroll */
var app = angular.module('ng-boot-boiler-demo',
    [
        require('ui.bootstrap'),
        require('ngTouch'),
        require('header-navbar'),
        require('splash-header'),
        require('app-footer')
    ], function($httpProvider){
        FastClick.attach(document.body);
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
);

app.controller('MainCtrl', function($scope, $http, $document, $modal, orderByFilter) {

});
