(function() {
  'use strict';

  angular
    .module('app')
    .controller('HeaderController', HeaderController);

//  HeaderController.$inject = ['dependencies'];

  /* @ngInject */
  function HeaderController(){
    var vm = this;
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

    activate();

    ////////////////

    function activate() {
    }
  }
})();
