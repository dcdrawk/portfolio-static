(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root.projects', {
        url: '/projects',
        views: {
          'container@': {
            templateUrl: 'app/projects/projects.html',
            controller: 'ProjectsController',
            controllerAs: 'vm'
          }
        }
      })
      .state('root.projects.view', {
        url: '/:projectName',
        params: {
            project: null
        },
        views: {
          'container@': {
            templateUrl: 'app/projects/project.view.html',
            controller: 'ProjectViewController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
