angular.module('cloudStream', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('cloudStream').config(function($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partial/main/main.html',
            controller: "MainCtrl"
        });

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('cloudStream').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
