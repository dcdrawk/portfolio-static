(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root.websites', {
        url: '/websites',
        views: {
          'container@': {
//            templateUrl: 'app/main/main.html',
            templateUrl: 'app/websites/websites.html',

            controller: 'WebsitesController',
            controllerAs: 'vm'
          }
        }
      })
      .state('root.websites.view', {
        url: '/:websiteName',
        params: {
            website: null
        },
        views: {
          'container@': {
            templateUrl: 'app/websites/websites.view.html',
            controller: 'WebsitesViewController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
