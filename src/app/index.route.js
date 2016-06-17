(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
          url: '',
          abstract: true,
          views: {
            'header': {
              templateUrl: 'app/layout/header.html',
              controller: 'HeaderController',
              controllerAs: 'vm'
            },
           'footer':{
             templateUrl: 'app/layout/footer.html',
             controller: 'FooterController',
             controllerAs: 'vm'
           }
          }
      })
      .state('root.about', {
        url: '/',
        views: {
          'container@': {
            templateUrl: 'app/about/about.html',
            controller: 'AboutController',
            controllerAs: 'vm'
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }

})();
