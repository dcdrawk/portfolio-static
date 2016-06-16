(function () {
  'use strict';
  angular
    .module('app')
    .factory('dataService', dataService);

//  dataService.$inject = ['dependencies'];

  /* @ngInject */
  function  dataService($http){
    var exports = {
      get: get,
      post: post
    };

    return exports;

    ////////////////

    function get(url) {
      return $http({
        method: 'GET',
        url: url,
        cache: true
      }).then(function(response){
        return response.data;
      });
    }

    function post(url, params) {
      return $http({
        method: 'POST',
        url: url,
        params: params
      }).then(function(response){
        return response.data;
      });
    }
  }
})();
