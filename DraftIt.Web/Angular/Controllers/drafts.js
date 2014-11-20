angular.module("draftIt")
    .controller("drafts", [
        "$scope", function($scope) {
            $scope.drafts = [
                {
                    id: 1,
                    name: "draft1",
                    category: "food"
                }, {
                    id: 2,
                    name: "draft2",
                    category: "animal"
                }, {
                    id: 3,
                    name: "draft3",
                    category: "beer"
                }
            ];
        }
]);