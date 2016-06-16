(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExperienceController', ExperienceController);

//  ExperienceController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceController(dataService, $timeout){
    var vm = this;

    activate();

    ////////////////

    function activate() {
      getExperience();
      staggerPage();
    }

    function getExperience() {
      dataService.get('/data/experience.json').then(function(data){
        vm.experienceList = data;
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
