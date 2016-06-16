(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectViewController', ProjectViewController);

//  ProjectViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectViewController(dataService, projectService, $timeout, $stateParams){
    var vm = this;
    activate();

    ////////////////

    function activate() {
      staggerPage();
      if(!projectService.projects);
        projectService.getProjects().then(function(projects){
          vm.project = getProject($stateParams.projectName, projects);
        });
    }

    function staggerPage() {
      //Animate the intro text
      $timeout(function(){
        vm.showProjectList = true;
      }, 250);
    }

    function getProject(projectName, projects) {
      for(var project of projects) {
        if(projectService.getUrl(project.title) === projectName) {
          return project;
        }
      }
    }
  }
})();
