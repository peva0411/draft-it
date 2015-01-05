module app.categories {
    'use strict';

    interface ICategoriesScope {
        title: string;
        categories: app.services.ICategory[];
    }

    class CategoriesController implements ICategoriesScope {
        
        title: string;
        categories: app.services.ICategory[];

        static $inject = ['app.services.CategoriesService'];
        constructor(categoriesService: app.services.ICategoriesService) {
            var vm = this;

            categoriesService.getAll()
                .then((cats: app.services.ICategory[]): void=> {
                    vm.categories = cats;
                });

            vm.categories = [];
        }
    }
    angular
        .module('app.categories')
        .controller('CategoriesController', CategoriesController);
} 