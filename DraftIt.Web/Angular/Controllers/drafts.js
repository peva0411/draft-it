angular.module("draftIt")
    .controller("drafts", [
        "$scope", function($scope) {
        $scope.drafts = ["draft1", "draft2", "draft3"];
    }
    ]);