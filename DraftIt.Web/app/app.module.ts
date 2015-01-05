((): void => {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.services',
        /*
         * features areas
         */
        'app.categories'
    ]);
})();
