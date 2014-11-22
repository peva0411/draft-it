angular.module("draftIt", ['ui.router', 'ngAnimate']).config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider.state('home', {
            url: "/",
            templateUrl: "angular/views/home.html",
            controller: 'home'
        })
        .state('drafts', {
            url: '/drafts',
            templateUrl: 'angular/views/drafts.html',
            controller: 'drafts'
        })
        .state('details', {
            url: '/drafts/details/:draftId',
            templateUrl: 'angular/views/draftDetails.html',
            controller: 'draftDetails'
        })
        .state('createDraft', {
            url: '/drafts/create',
            templateUrl: 'angular/views/createDraft.html',
            controller: 'createDraft'
        })
        .state('createCategory', {
            url: '/createcategory',
            templateUrl: 'angular/views/createCategory.html',
            controller: 'createCategoryCtrl'
        });
});