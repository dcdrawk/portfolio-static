(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactController', ContactController);

//  ContactController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactController($rootScope, dataService, contactService, $timeout){
    var vm = this;

    vm.sendMessage = function() {
      contactService.sendMessage(vm.message);
    };

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Contact';
      getContact();
      staggerPage();
    }

    function getContact() {
      dataService.get('/data/contact.json').then(function(data){
        vm.contact = data;
      });
    }

    function staggerPage() {
      //Animate the intro text
      $timeout(function(){
        vm.showContactInfo = true;
      }, 250)
    }
  }
})();
