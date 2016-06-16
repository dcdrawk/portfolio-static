(function() {
  'use strict';

  angular
    .module('app')
    .controller('WebsitesController', WebsitesController);

//  WebsitesController.$inject = ['dependencies'];

  /* @ngInject */
  function WebsitesController($rootScope, dataService, websiteService, $timeout){
    var vm = this;

    vm.getUrl = function(title) {
      return websiteService.getUrl(title);
    }

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Websites';
      staggerPage();
      if(websiteService.websites)
        vm.websites = websiteService.websites;
      else
        websiteService.getWebsites().then(function(websites){
          vm.websites = websites;
        });
    }

    function staggerPage() {
      //Animate the intro text
      $timeout(function(){
        vm.showWebsiteList = true;
      }, 250)
    }
  }
})();
