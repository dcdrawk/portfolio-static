(function() {
    'use strict';

    angular
        .module('app')
        .factory('websiteService', websiteService);

    // websiteService.$inject = ['dependencies'];

    /* @ngInject */
    function websiteService(dataService) {
      var websites = null;

      var service = {
          websites: websites,
          getUrl: getUrl,
          getWebsites: getWebsites
      };

      return service;

      function getUrl(title) {
        title = title.toLowerCase();
        title = title.replace(/ /g, '-');
        return title;
      }

      function getWebsites() {
        return dataService.get('data/websites.json').then(function(data){
          websites = data;
          return websites;
        });
      }
    }
})();
