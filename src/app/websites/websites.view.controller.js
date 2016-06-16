(function() {
  'use strict';

  angular
    .module('app')
    .controller('WebsitesViewController', WebsitesViewController);

//  WebsitesViewController.$inject = ['dependencies'];

  /* @ngInject */
  function WebsitesViewController($rootScope, dataService, websiteService, $timeout, $stateParams){
    var vm = this;
    activate();

    ////////////////

    function activate() {
      staggerPage();
      if(!websiteService.websites);
        websiteService.getWebsites().then(function(websites){
          vm.website = getWebsite($stateParams.websiteName, websites);
        });
    }

    function staggerPage() {
      $rootScope.activeTab = 'Websites';
      //Animate the intro text
      $timeout(function(){
        vm.showProjectList = true;
      }, 250);
    }

    function getWebsite(websiteName, websites) {
      for(var i in websites) {
        var website = websites[i];
        if(websiteService.getUrl(website.title) === websiteName) {
          return website;
        }
      }
    }
  }
})();
