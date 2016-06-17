(function() {
  'use strict';

  angular
    .module('app')
    .controller('FooterController', FooterController);

//  FooterController.$inject = ['dependencies'];

  /* @ngInject */
  function FooterController($rootScope, $timeout){
    var vm = this;
    var footerTimer;

    //When the state changes, hide the footer
    $rootScope.$on('$stateChangeStart',  function(event, toState, toParams, fromState, fromParams, options){
      $timeout.cancel(footerTimer);
      vm.showFooter = false;
    });

    //When we are done staggering, show the footer
    $rootScope.$on('DONE_STAGGER',  function(){
      showFooter();
    });

    activate();

    ////////////////

    function activate() {
      // showFooter();
    }

    //Show the footer 1 second after everything else has finished animating
    function showFooter() {
      footerTimer = $timeout(function(){
        vm.showFooter = true;
      }, 1000);
    }
  }
})();
