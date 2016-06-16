(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectViewController', ProjectViewController);

//  ProjectViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectViewController($rootScope, dataService, projectService, $timeout, $stateParams){
    var vm = this;
    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Projects';
      staggerPage();
      if(!projectService.projects);
        projectService.getProjects().then(function(projects){
          vm.project = getProject($stateParams.projectName, projects);
        });
    }

    function staggerPage() {
      //Animate the intro text
      $timeout(function(){
        vm.showProject = true;
      }, 250);
    }

    function getProject(projectName, projects) {
      for(var i in projects) {
        var project = projects[i];
        if(projectService.getUrl(project.title) === projectName) {
          return project;
        }
      }
    }
  }
})();
