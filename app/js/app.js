define(
    ["angular",
    "Services/services",
    "Directives/directives",
    "Filters/filters",
    "Controllers/controllers"
    ],

    function BaseManager(angular,Services,Directives,Filters){
        var initialize = function () {

        var app = angular.module("myApp", [], function($routeProvider, $locationProvider) {

            $routeProvider.when('/', {
                templateUrl: '/templates/Main.html',
                controller: MainCtrl
            });

            $routeProvider.otherwise( { redirectTo: '/'} );

            $locationProvider.html5Mode(true);
        });

        Filters.initialize(app);

        app.factory(Services);
        app.directive(Directives);

        // allow fetching json from external server
        app.config(function($httpProvider){
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        });

        angular.bootstrap(document,["myApp"]);

        };
    return {
        initialize : initialize
    };
});