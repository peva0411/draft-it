angular.module('draftIt').controller("createCategoryCtrl", [
    "$scope", "$state", "category", function($scope, $state, category) {
        $scope.categorySvc = category;

        $scope.create = function() {
            $scope.categorySvc.categories.push($scope.category);
            console.log("Created Category");
            $state.go('createDraft');
        };
    }
]);