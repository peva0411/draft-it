var app;
(function (app) {
    (function (categories) {
        'use strict';

        var CategoriesController = (function () {
            function CategoriesController(categoriesService) {
                var vm = this;

                categoriesService.getAll().then(function (cats) {
                    vm.categories = cats;
                });

                vm.categories = [];
            }
            CategoriesController.$inject = ['app.services.CategoriesService'];
            return CategoriesController;
        })();
        angular.module('app.categories').controller('CategoriesController', CategoriesController);
    })(app.categories || (app.categories = {}));
    var categories = app.categories;
})(app || (app = {}));
//# sourceMappingURL=categories.controller.js.map
