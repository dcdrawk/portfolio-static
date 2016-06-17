(function() {
    'use strict';

    angular
        .module('app')
        .factory('projectService', projectService);

    // projectService.$inject = ['dependencies'];

    /* @ngInject */
    function projectService(dataService) {
      var projects = null;

      var service = {
          projects: projects,
          getUrl: getUrl,
          getProjects: getProjects
      };

      return service;

      function getUrl(title) {
        title = title.toLowerCase();
        title = title.replace(/ /g, '-');
        return title;
      }

      function getProjects() {
        return dataService.get('data/projects.json').then(function(data){
          projects = data;
          return projects;
        });
      }
    }
})();
