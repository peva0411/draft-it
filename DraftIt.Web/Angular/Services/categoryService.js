angular.module("draftIt").factory("category", [
    function() {
        var categories = ["Food", "Animal", "Car", "Drink"];

        return {
            categories: categories
        };
    }
]);