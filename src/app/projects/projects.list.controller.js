(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectsController', ProjectsController);

//  ProjectsController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectsController($rootScope, dataService, projectService, $timeout){
    var vm = this;

    vm.getUrl = function(title) {
      return projectService.getUrl(title);
    }

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Projects';
      staggerPage();
      if(projectService.projects)
        vm.projects = projectService.projects;
      else
        projectService.getProjects().then(function(projects){
          vm.projects = projects;
        });
    }

    function staggerPage() {
      //Animate the intro text
      $timeout(function(){
        vm.showProjectList = true;
      }, 250)
    }
  }
})();
