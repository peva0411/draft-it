angular.module("draftIt")
    .controller("drafts", [
        "$scope", function($scope) {
            $scope.drafts = [
                {
                    name: "draft1",
                    category: "food"
                }, {
                    name: "draft2",
                    category: "animal"
                }, {
                    name: "draft3",
                    category: "beer"
                }
            ];
        }
]);