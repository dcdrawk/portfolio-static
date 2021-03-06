(function() {
  'use strict';

  angular
    .module('app')
    .controller('HeaderController', HeaderController);

//  HeaderController.$inject = ['dependencies'];

  /* @ngInject */
  function HeaderController($state, $rootScope, $timeout){
    var vm = this;

    var stateChangeStart = $rootScope.$on('$stateChangeStart',  function(event, toState, toParams, fromState, fromParams, options){
      if(!vm.loaded && fromParams.websiteName || !vm.loaded && fromParams.projectName)
        event.preventDefault();
    });

    vm.menu = [
      {
        title: 'About',
        sref: 'root.about'
      },{
        title: 'Projects',
        sref: 'root.projects'
      },{
        title: 'Websites',
        sref: 'root.websites'
      },{
        title: 'Experience',
        sref: 'root.experience'
      },{
        title: 'Contact',
        sref: 'root.contact'
      }
    ];

    vm.go = function(sref) {
       $state.go(sref);
    };

    activate();

    ////////////////

    function activate() {
      $timeout(function(){
        vm.loaded = true;
      }, 150)
    }


  }
})();
