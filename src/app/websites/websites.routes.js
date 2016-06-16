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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
