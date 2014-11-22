angular.module("draftIt")
    .controller("drafts", [
        "$scope", "draft", function($scope, draft) {
        $scope.draft = draft;
    }
]);