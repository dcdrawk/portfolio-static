(function() {
  'use strict';

  angular
    .module('app')
    .controller('HeaderController', HeaderController);

//  HeaderController.$inject = ['dependencies'];

  /* @ngInject */
  function HeaderController($state, $rootScope, $timeout){
    var vm = this;

    $rootScope.$on('$stateChangeStart',  function(event, toState, toParams, fromState, fromParams, options){
      console.log(fromParams);
      if(!vm.loaded && fromParams.websiteName || !vm.loaded && fromParams.projectName)
        event.preventDefault();
    });

//    vm.property = 'Controller';
    vm.menu = [
      {
        title: 'Home',
        sref: 'root.home'
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
