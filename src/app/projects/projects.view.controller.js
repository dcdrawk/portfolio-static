(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectViewController', ProjectViewController);

//  ProjectViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectViewController($scope, $rootScope, dataService, projectService, $timeout, $stateParams){
    var vm = this;
    var doneStagger;

    $scope.$on('$destroy', function (event){
      $timeout.cancel(doneStagger);
    });

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
      doneStagger = $timeout(function(){
        vm.showProject = true;
        $rootScope.$broadcast('DONE_STAGGER');
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
