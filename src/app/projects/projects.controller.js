(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectsController', ProjectsController);

//  ProjectsController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectsController(dataService, $timeout){
    var vm = this;

    activate();

    ////////////////

    function activate() {
      getProjects();
      staggerPage();
    }

    function getProjects() {
      dataService.get('/data/projects.json').then(function(data){
        vm.projects = data;
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
