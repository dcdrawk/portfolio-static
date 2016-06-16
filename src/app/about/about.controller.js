(function() {
  'use strict';

  angular
    .module('app')
    .controller('AboutController', AboutController);

//  AboutController.$inject = ['dependencies'];

  /* @ngInject */
  function AboutController(dataService, $timeout){
    var vm = this;
    vm.property = 'Controller';
//    vm.intro = '<p>With a passion for all things web, I enjoy crafting clean and compelling user experiences. I enjoy turning design concepts into reality, as well as solving complex issues that arise along the way.</p>\n<p>With 2.5 years of Web Development experience, I currently work as a Front-End Developer in the Lower Mainland, creating powerful and robust Web Apps.</p>\n<p>After graduating with a BA from SFU\'s Interactive Arts and Technology (SIAT) program, I still have a thirst for knowledge and I am always keeping up with the latest in web technology.</p>'

    activate();

    ////////////////

    function activate() {
      getAboutInfo();
      staggerPage();
    }

    function getAboutInfo() {
      dataService.get('/data/about.json').then(function(data){
        vm.intro = data.intro;
        vm.designSkills = data.designSkills;
        vm.digitalMediaSkills = data.multiMediaSkills;
        vm.softwareSkills = data.softwareSkills;
      });
    }

    function staggerPage() {
      //Animate the intro header
      $timeout(function(){
        vm.showIntroHeading = true;
      }, 0)

      //Animate the intro text
      $timeout(function(){
        vm.showIntroText = true;
      }, 250)

      //Animate the skills heading
      $timeout(function(){
        vm.showSkillsHeading = true;
      }, 500)

      //Animate the skills list
      $timeout(function(){
        vm.showSkillsList = true;
      }, 750)
    }
  }
})();
