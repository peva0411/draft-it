var app;
(function (app) {
    (function (services) {
        'use strict';

        var CategoriesService = (function () {
            function CategoriesService($http) {
                this.$http = $http;
            }
            CategoriesService.prototype.getAll = function () {
                return this.$http.get('/api/categories').then(function (response) {
                    return response.data;
                });
            };
            return CategoriesService;
        })();

        factory.$inject = ['$http'];
        function factory($http) {
            return new CategoriesService($http);
        }

        angular.module('app.services').factory('app.services.CategoriesService', factory);
    })(app.services || (app.services = {}));
    var services = app.services;
})(app || (app = {}));
//# sourceMappingURL=categories.service.js.map
