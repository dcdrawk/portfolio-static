(function() {
    'use strict';

    angular
        .module('app')
        .factory('contactService', contactService);

    // contactService.$inject = ['dependencies'];

    /* @ngInject */
    function contactService(dataService) {
        var service = {
            sendMessage: sendMessage
        };

        return service;

        function sendMessage(params) {
          var url = 'assets/email.php';
          dataService.post(url, params);
        }
    }
})();
