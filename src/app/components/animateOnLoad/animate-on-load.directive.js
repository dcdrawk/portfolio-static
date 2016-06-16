//'use strict';
//
//angular.module('app')
//  .directive('animateOnLoad', ['$animateCss', function($animateCss) {
//  return {
//    'link': function(scope, element) {
//      $animateCss(element, {
//        'event': 'enter',
//        structural: true
//      }).start();
//    }
//  };
//}]);

(function () {
  'use strict';

  angular
    .module('app')
    .directive('animateOnLoad', animateOnLoad);

//  animateOnLoad.$inject = ['dependencies'];

  /* @ngInject */
  function  animateOnLoad($animateCss) {
    var directive = {
      link: link,
      restrict: 'A'
    };
    return directive;

    function link(scope, element) {
      $animateCss(element, {
        'event': 'enter',
        structural: true
      }).start();
    }
  }
})();