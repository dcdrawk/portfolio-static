(function() {
  'use strict';

  angular
    .module('app')
    .controller('ProjectViewController', ProjectViewController);

//  ProjectViewController.$inject = ['dependencies'];

  /* @ngInject */
  function ProjectViewController($scope, $rootScope, $document, dataService, projectService, $mdDialog, $mdMedia, $timeout, $stateParams){
    var vm = this;
    var doneStagger;

    vm.openGallery = function(ev, index) {
      $mdDialog.show({
        controller: GalleryModalController,
        controllerAs: 'vm',
        templateUrl: 'app/components/galleryModal/gallery.modal.html',
        parent: angular.element($document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        locals: {
           images: vm.project.images,
           index: index,
           title: vm.project.title
         }
      // })
      // .then(function() {
      });
      // $scope.$watch(function() {
      //   return $mdMedia('xs') || $mdMedia('sm');
      // }, function() {
      //   // $scope.customFullscreen = (wantsFullScreen === true);
      // });
    }

    $scope.$on('$destroy', function (){
      $timeout.cancel(doneStagger);
    });

    activate();

    ////////////////

    function activate() {
      $rootScope.activeTab = 'Projects';
      staggerPage();
      if(!projectService.projects)
        projectService.getProjects().then(function(projects){
          vm.project = getProject($stateParams.projectName, projects);
        });
    }

    function staggerPage() {
      //Animate the intro text
      doneStagger = $timeout(function(){
        vm.showProject = true;
        $rootScope.$broadcast('DONE_STAGGER');
      }, 250);
    }

    function getProject(projectName, projects) {
      for(var i in projects) {
        var project = projects[i];
        if(projectService.getUrl(project.title) === projectName) {
          return project;
        }
      }
    }

    function GalleryModalController($scope, $mdDialog, images, index, title) {
        var vm = this;
        vm.images = images;
        vm.index = index;
        vm.title = title;

        vm.close = function() {
          $mdDialog.cancel();
        };

        vm.next = function() {
          if(vm.index < vm.images.length-1)
            vm.index++;
        };

        vm.previous = function() {
          if(vm.index > 0)
            vm.index--;
        };

        activate();

        function activate() {

        }
    }
  }
})();
