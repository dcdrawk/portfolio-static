(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root.contact', {
        url: '/contact',
        views: {
          'container@': {
            templateUrl: 'app/contact/contact.html',
            controller: 'ContactController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
