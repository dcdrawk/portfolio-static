(function() {
  'use strict';

  angular
    .module('app')
    .controller('ContactController', ContactController);

//  ContactController.$inject = ['dependencies'];

  /* @ngInject */
  function ContactController($scope, $rootScope, dataService, contactService, $timeout){
    var vm = this;
    var doneStagger;

    vm.sendMessage = function() {
      contactService.sendMessage(vm.message);
    };

    //Cancel the doneStagger timeout if the controller is destroyed
    $scope.$on('$destroy', function (){
      $timeout.cancel(doneStagger);
    });

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Contact';
      getContact();
      staggerPage();
    }

    function getContact() {
      dataService.get('data/contact.json').then(function(data){
        vm.contact = data;
      });
    }

    function staggerPage() {
      //Animate the intro text
      doneStagger = $timeout(function(){
        vm.showContactInfo = true;
        $rootScope.$broadcast('DONE_STAGGER');
      }, 250);
    }
  }
})();
