((): void => {
    'use strict';

    angular
        .module('app.categories')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider: ng.route.IRouteProvider):void {
        $routeProvider
            .when('/categories', {
                templateUrl: '/app/categories/categories.html',
                controller: 'CategoriesController',
                controllerAs: 'vm'
            });
    }

})();
 