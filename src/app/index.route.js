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
            }
//            'footer':{
//              templateUrl: 'footer.html',
////              controller: 'FooterCtrl'
//            }
          }
      })
      .state('root.home', {
        url: '/',
        views: {
          'container@': {
//            templateUrl: 'app/main/main.html',
            templateUrl: 'app/about/about.html',

            controller: 'AboutController',
            controllerAs: 'vm'
          }
        }      
      });

    $urlRouterProvider.otherwise('/');
  }

})();
