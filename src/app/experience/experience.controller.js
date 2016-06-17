(function() {
  'use strict';

  angular
    .module('app')
    .controller('ExperienceController', ExperienceController);

//  ExperienceController.$inject = ['dependencies'];

  /* @ngInject */
  function ExperienceController($scope, $rootScope, dataService, $timeout){
    var vm = this;
    var doneStagger;

    //Cancel the doneStagger timeout if the controller is destroyed
    $scope.$on('$destroy', function (){
      $timeout.cancel(doneStagger);
    });

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Experience';
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
      doneStagger = $timeout(function(){
        vm.showExperience = true;
        $rootScope.$broadcast('DONE_STAGGER');
      }, 250)
    }
  }
})();
