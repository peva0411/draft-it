(function () {
    'use strict';

    angular.module('app.categories').config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider.when('/categories', {
            templateUrl: '/app/categories/categories.html',
            controller: 'CategoriesController',
            controllerAs: 'vm'
        });
    }
})();
//# sourceMappingURL=categories.routes.js.map
