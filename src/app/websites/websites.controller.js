(function() {
  'use strict';

  angular
    .module('app')
    .controller('WebsitesController', WebsitesController);

//  WebsitesController.$inject = ['dependencies'];

  /* @ngInject */
  function WebsitesController(dataService, $timeout){
    var vm = this;
    activate();

    ////////////////

    function activate() {
      getWebsites();
      staggerPage();

    }

    function getWebsites() {
      dataService.get('/data/websites.json').then(function(data){
        console.log(data);
        vm.websites = data;
      });
    }

    function staggerPage() {
      $timeout(function(){
        vm.showWebsiteList = true;
      }, 250)
    }
  }
})();
