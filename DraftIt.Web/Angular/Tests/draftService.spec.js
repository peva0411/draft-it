/// <reference path="../../Scripts/jasmine.js" />
/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-mocks.js" />
/// <reference path="../../Scripts/angular-resource.js" />
/// <reference path="../../Scripts/angular-ui-router.js" />
/// <reference path="../../Scripts/angular-animate.js" />
/// <reference path="../app.js" />
/// <reference path="../Services/draftService.js" />

describe('Draft Service', function() {

    var $httpBackend,
        service,
        draftsUrl = '/api/drafts';

    //create ng module
    beforeEach(function() {
        module('draftIt');
    });

    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        service = $injector.get('draft');
    }));

    describe('When get all drafts', function() {
        it('Should make a call to the API', function() {
            $httpBackend.expectGET(draftsUrl).respond(200);
               
            service.getAllDrafts();
           
            $httpBackend.verifyNoOutstandingExpectation();

        });

        it('Should send an error when API fails', function() {
            $httpBackend.whenGET(draftsUrl).respond(500);
            var err;
            service.getAllDrafts().catch(function(e) {
                err = e;
            });
            $httpBackend.flush();
            expect(err).toBeDefined();
        });
    });
});