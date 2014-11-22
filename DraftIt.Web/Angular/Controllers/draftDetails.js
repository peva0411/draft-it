angular.module("draftIt")
    .controller("draftDetails", ["$scope", "$stateParams", function($scope, $stateParams) {

        $scope.draftId = $stateParams.draftId;

        $scope.details = {
            name: "Beer draft",
            items: ["Coors", "Sam Adams Boston Lager", "Labatt Blue", "Molson Canadian", "Bud Light"]
        };
    }
])