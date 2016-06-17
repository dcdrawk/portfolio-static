(function() {
  'use strict';

  angular
    .module('app')
    .controller('AboutController', AboutController);

//  AboutController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutController($scope, $rootScope, dataService, $timeout){
    var vm = this;
    var doneStagger;

    $scope.$on('$destroy', function (){
      $timeout.cancel(doneStagger);
    });

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Home';
      getAboutInfo();
      staggerPage();
    }

    function getAboutInfo() {
      dataService.get('/data/about.json').then(function(data){
        vm.intro = data.intro;
        vm.designSkills = data.designSkills;
        vm.digitalMediaSkills = data.digitalMediaSkills;
        vm.webSkills = data.webSkills;
        vm.developmentSkills = data.developmentSkills;
      });
    }

    function staggerPage() {
      //Animate the intro header
      $timeout(function(){
        vm.showDesign = true;
      }, 200)

      //Animate the intro text
      $timeout(function(){
        vm.showCreate = true;
      }, 600)

      //Animate the skills heading
      $timeout(function(){
        vm.showInspire = true;
      }, 1000)

      $timeout(function(){
        vm.showIntroHeading = true;
      }, 1400)

      //Animate the intro text
      $timeout(function(){
        vm.showIntroText = true;
      }, 1600)

      //Animate the skills heading
      $timeout(function(){
        vm.showSkillsHeading = true;
      }, 1800)

      //Animate the skills list
      doneStagger = $timeout(function(){
        vm.showSkillsList = true;
        $rootScope.$broadcast('DONE_STAGGER');
      }, 2000)
    }
  }
})();
