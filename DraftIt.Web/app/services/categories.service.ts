module app.services {
    'use strict';

    export interface ICategory {
        name: string
    }

    export interface ICategoriesService {
        getAll(): ng.IPromise<ICategory[]>;
    }

    class CategoriesService implements ICategoriesService {

        constructor(private $http: ng.IHttpService) { }

        getAll(): ng.IPromise<ICategory[]> {
            return this.$http.get('/api/categories')
                .then((response: ng.IHttpPromiseCallbackArg<ICategory[]>): ICategory[]=> {
                    return response.data;
                });
        }
    }

    factory.$inject = ['$http'];
    function factory($http:ng.IHttpService) {
        return new CategoriesService($http);
    }

    angular.module('app.services')
           .factory('app.services.CategoriesService', factory);
}

