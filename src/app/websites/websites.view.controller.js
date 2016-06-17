(function() {
  'use strict';

  angular
    .module('app')
    .controller('WebsitesViewController', WebsitesViewController);

//  WebsitesViewController.$inject = ['dependencies'];

  /* @ngInject */
  function WebsitesViewController($scope, $rootScope, dataService, websiteService, $timeout, $stateParams){
    var vm = this;
    var doneStagger;

    $scope.$on('$destroy', function (event){
      $timeout.cancel(doneStagger);
    });

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
      doneStagger = $timeout(function(){
        vm.showProjectList = true;
        $rootScope.$broadcast('DONE_STAGGER');
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
