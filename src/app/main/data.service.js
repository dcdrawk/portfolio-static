(function () {
  'use strict';
  angular
    .module('app')
    .factory('dataService', dataService);

//  dataService.$inject = ['dependencies'];

  /* @ngInject */
  function  dataService($http){
    var exports = {
      get: get
    };
    

    return exports;

    ////////////////

    function get(url) {
      return $http({
        method: 'GET',
        url: url
      }).then(function(response){
        return response.data;
      });
    }
  }
})();