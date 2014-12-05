var app = angular.module("draftIt");

app.factory('draft', ["$resource", "$q", function($resource, $q) {
    return {
        getAllDrafts: function() {
            var deferred = $q.defer();

            $resource("/api/drafts").query()
                .$promise
                .then(function (data) {
                    deferred.resolve(data);
                }).catch(function(error) {
                    deferred.reject(error);
            });

            return deferred.promise;
        }
    };
}]);