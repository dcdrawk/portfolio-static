(function() {
  'use strict';

  angular
    .module('app')
    .controller('WebsitesController', WebsitesController);

//  WebsitesController.$inject = ['dependencies'];

  /* @ngInject */
  function WebsitesController(dataService, $timeout){
    var vm = this;
    // vm.property = 'Controller';
//    vm.intro = '<p>With a passion for all things web, I enjoy crafting clean and compelling user experiences. I enjoy turning design concepts into reality, as well as solving complex issues that arise along the way.</p>\n<p>With 2.5 years of Web Development experience, I currently work as a Front-End Developer in the Lower Mainland, creating powerful and robust Web Apps.</p>\n<p>After graduating with a BA from SFU\'s Interactive Arts and Technology (SIAT) program, I still have a thirst for knowledge and I am always keeping up with the latest in web technology.</p>'

    activate();

    ////////////////

    function activate() {
      getWebsites();
      // getAboutInfo();
      staggerPage();

    }

    function getWebsites() {
      dataService.get('/data/websites.json').then(function(data){
        console.log(data);
        vm.websites = data;
        // loadImages(vm.websites);
      });
    }

    function staggerPage() {
      //Animate the intro text
      $timeout(function(){
        vm.showWebsiteList = true;
      }, 250)
    }

    // function loadImages(projects) {
    //   projects.forEach(function(project){
    //     var url = project.cardImgSrc;
    //     console.log('get da images!');
    //     dataService.get(url);
    //   });
    // }
  }
})();
