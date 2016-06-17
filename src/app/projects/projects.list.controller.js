(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectsController', ProjectsController);

//  ProjectsController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectsController($scope, $rootScope, dataService, projectService, $timeout){
    var vm = this;
    var doneStagger;

    $scope.$on('$destroy', function (){
      $timeout.cancel(doneStagger);
    });

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
      doneStagger = $timeout(function(){
        vm.showProjectList = true;
        $rootScope.$broadcast('DONE_STAGGER');
      }, 250)
    }
  }
})();
