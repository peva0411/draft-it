angular.module("draftIt").controller("createDraft", ["$scope", "$state", "draft", "category", function ($scope, $state, draft, category) {

    $scope.categories = category.categories;

    $scope.create = function () {
        
            draft.drafts.push({
                id: $scope.id,
                name: $scope.name,
                category: $scope.category
            });

        $state.go('drafts');

        };
    }
]);