!function(){"use strict";angular.module("app",["ngAnimate","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr","oblador.lazytube","afkl.lazyImage"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("app").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("app").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t){function a(a){function i(e){return e.data}function o(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(n+"/contributors?per_page="+a).then(i)["catch"](o)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:n,getContributors:a};return i}e.$inject=["$log","$http"],angular.module("app").factory("githubContributor",e)}(),function(){"use strict";function e(e){function t(t,a,n,i){var o,r=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){r.type(e).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(e){r.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function a(e,t){function a(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(e){return i.contributors=e,i.contributors})}var i=this;i.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}e.$inject=["malarkey"],angular.module("app").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e){function t(t,a){e(a,{event:"enter",structural:!0}).start()}var a={link:t,restrict:"A"};return a}e.$inject=["$animateCss"],angular.module("app").directive("animateOnLoad",e)}(),function(){"use strict";function e(e,t,a,n,i,o){function r(){s(),n.websites||n.getWebsites().then(function(e){d.website=l(o.websiteName,e)})}function s(){t.activeTab="Websites",c=i(function(){d.showWebsite=!0,t.$broadcast("DONE_STAGGER")},250)}function l(e,t){for(var a in t){var i=t[a];if(n.getUrl(i.title)===e)return i}}var c,d=this;e.$on("$destroy",function(){i.cancel(c)}),r()}e.$inject=["$scope","$rootScope","dataService","websiteService","$timeout","$stateParams"],angular.module("app").controller("WebsitesViewController",e)}(),function(){"use strict";function e(e){function t(e){return e=e.toLowerCase(),e=e.replace(/ /g,"-")}function a(){return e.get("data/websites.json").then(function(e){return n=e})}var n=null,i={websites:n,getUrl:t,getWebsites:a};return i}e.$inject=["dataService"],angular.module("app").factory("websiteService",e)}(),function(){"use strict";function e(e,t){e.state("root.websites",{url:"/websites",views:{"container@":{templateUrl:"app/websites/websites.html",controller:"WebsitesController",controllerAs:"vm"}}}).state("root.websites.view",{url:"/:websiteName",params:{website:null},views:{"container@":{templateUrl:"app/websites/websites.view.html",controller:"WebsitesViewController",controllerAs:"vm"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";function e(e,t,a,n,i){function o(){t.activeTab="Websites",r(),n.websites?l.websites=n.websites:n.getWebsites().then(function(e){l.websites=e})}function r(){s=i(function(){l.showWebsiteList=!0,t.$broadcast("DONE_STAGGER")},250)}var s,l=this;e.$on("$destroy",function(){i.cancel(s)}),l.getUrl=function(e){return n.getUrl(e)},o()}e.$inject=["$scope","$rootScope","dataService","websiteService","$timeout"],angular.module("app").controller("WebsitesController",e)}(),function(){"use strict";function e(e,t,a,n,i,o,r,s,l){function c(){t.activeTab="Projects",d(),i.projects||i.getProjects().then(function(e){g.project=m(l.projectName,e)})}function d(){p=s(function(){g.showProject=!0,t.$broadcast("DONE_STAGGER")},250)}function m(e,t){for(var a in t){var n=t[a];if(i.getUrl(n.title)===e)return n}}function u(e,t,a,n,i){function o(){}var r=this;r.images=a,r.index=n,r.title=i,r.close=function(){t.cancel()},r.next=function(){r.index<r.images.length-1&&r.index++},r.previous=function(){r.index>0&&r.index--},o()}u.$inject=["$scope","$mdDialog","images","index","title"];var p,g=this;g.openGallery=function(e,t){o.show({controller:u,controllerAs:"vm",templateUrl:"app/components/galleryModal/gallery.modal.html",parent:angular.element(a.body),targetEvent:e,clickOutsideToClose:!0,locals:{images:g.project.images,index:t,title:g.project.title}})},e.$on("$destroy",function(){s.cancel(p)}),c()}e.$inject=["$scope","$rootScope","$document","dataService","projectService","$mdDialog","$mdMedia","$timeout","$stateParams"],angular.module("app").controller("ProjectViewController",e)}(),function(){"use strict";function e(e){function t(e){return e=e.toLowerCase(),e=e.replace(/ /g,"-")}function a(){return e.get("data/projects.json").then(function(e){return n=e})}var n=null,i={projects:n,getUrl:t,getProjects:a};return i}e.$inject=["dataService"],angular.module("app").factory("projectService",e)}(),function(){"use strict";function e(e,t){e.state("root.projects",{url:"/projects",views:{"container@":{templateUrl:"app/projects/projects.html",controller:"ProjectsController",controllerAs:"vm"}}}).state("root.projects.view",{url:"/:projectName",params:{project:null},views:{"container@":{templateUrl:"app/projects/project.view.html",controller:"ProjectViewController",controllerAs:"vm"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";function e(e,t,a,n,i){function o(){t.activeTab="Projects",r(),n.projects?l.projects=n.projects:n.getProjects().then(function(e){l.projects=e})}function r(){s=i(function(){l.showProjectList=!0,t.$broadcast("DONE_STAGGER")},250)}var s,l=this;e.$on("$destroy",function(){i.cancel(s)}),l.getUrl=function(e){return n.getUrl(e)},o()}e.$inject=["$scope","$rootScope","dataService","projectService","$timeout"],angular.module("app").controller("ProjectsController",e)}(),function(){"use strict";angular.module("app").config(["$mdThemingProvider",function(e){e.theme("default").primaryPalette("teal",{"default":"500","hue-1":"100","hue-2":"600","hue-3":"A100"}).accentPalette("amber",{"default":"500"})}])}(),function(){"use strict";function e(e,t,a){function n(){o(),e(function(){r.classAnimation="rubberBand"},4e3)}function i(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function o(){r.awesomeThings=t.getTec(),angular.forEach(r.awesomeThings,function(e){e.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1465962914930,r.showToastr=i,n()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("app").controller("MainController",e)}(),function(){"use strict";function e(e){function t(t){return e({method:"GET",url:t,cache:!0}).then(function(e){return e.data})}function a(t,a){return e({method:"POST",url:t,params:a}).then(function(e){return e.data})}var n={get:t,post:a};return n}e.$inject=["$http"],angular.module("app").factory("dataService",e)}(),function(){"use strict";function e(e,t,a){function n(){a(function(){i.loaded=!0},150)}var i=this;t.$on("$stateChangeStart",function(e,t,a,n,o,r){(!i.loaded&&o.websiteName||!i.loaded&&o.projectName)&&e.preventDefault()});i.menu=[{title:"About",sref:"root.about"},{title:"Projects",sref:"root.projects"},{title:"Websites",sref:"root.websites"},{title:"Experience",sref:"root.experience"},{title:"Contact",sref:"root.contact"}],i.go=function(t){e.go(t)},n()}e.$inject=["$state","$rootScope","$timeout"],angular.module("app").controller("HeaderController",e)}(),function(){"use strict";function e(e,t){function a(){}function n(){i=t(function(){o.showFooter=!0},1e3)}var i,o=this;e.$on("$stateChangeStart",function(){t.cancel(i),o.showFooter=!1}),e.$on("DONE_STAGGER",function(){n()});a()}e.$inject=["$rootScope","$timeout"],angular.module("app").controller("FooterController",e)}(),function(){"use strict";function e(e,t){e.state("root.experience",{url:"/experience",views:{"container@":{templateUrl:"app/experience/experience.html",controller:"ExperienceController",controllerAs:"vm"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";function e(e,t,a,n){function i(){t.activeTab="Experience",o(),r()}function o(){a.get("data/experience.json").then(function(e){l.experienceList=e})}function r(){s=n(function(){l.showExperience=!0,t.$broadcast("DONE_STAGGER")},250)}var s,l=this;e.$on("$destroy",function(){n.cancel(s)}),i()}e.$inject=["$scope","$rootScope","dataService","$timeout"],angular.module("app").controller("ExperienceController",e)}(),function(){"use strict";function e(e){function t(t){var a="assets/email.php";e.post(a,t)}var a={sendMessage:t};return a}e.$inject=["dataService"],angular.module("app").factory("contactService",e)}(),function(){"use strict";function e(e,t){e.state("root.contact",{url:"/contact",views:{"container@":{templateUrl:"app/contact/contact.html",controller:"ContactController",controllerAs:"vm"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";function e(e,t,a,n,i){function o(){t.activeTab="Contact",r(),s()}function r(){a.get("data/contact.json").then(function(e){c.contact=e})}function s(){l=i(function(){c.showContactInfo=!0,t.$broadcast("DONE_STAGGER")},250)}var l,c=this;c.sendMessage=function(){n.sendMessage(c.message)},e.$on("$destroy",function(){i.cancel(l)}),o()}e.$inject=["$scope","$rootScope","dataService","contactService","$timeout"],angular.module("app").controller("ContactController",e)}(),function(){"use strict";function e(e,t,a,n){function i(){t.activeTab="Home",o(),r()}function o(){a.get("data/about.json").then(function(e){l.intro=e.intro,l.designSkills=e.designSkills,l.digitalMediaSkills=e.digitalMediaSkills,l.webSkills=e.webSkills,l.developmentSkills=e.developmentSkills})}function r(){n(function(){l.showDesign=!0},200),n(function(){l.showCreate=!0},600),n(function(){l.showInspire=!0},1e3),n(function(){l.showIntroHeading=!0},1400),n(function(){l.showIntroText=!0},1600),n(function(){l.showSkillsHeading=!0},1800),s=n(function(){l.showSkillsList=!0,t.$broadcast("DONE_STAGGER")},2e3)}var s,l=this;e.$on("$destroy",function(){n.cancel(s)}),i()}e.$inject=["$scope","$rootScope","dataService","$timeout"],angular.module("app").controller("AboutController",e)}(),function(){"use strict";function e(e){}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,t){e.state("root",{url:"","abstract":!0,views:{header:{templateUrl:"app/layout/header.html",controller:"HeaderController",controllerAs:"vm"},footer:{templateUrl:"app/layout/footer.html",controller:"FooterController",controllerAs:"vm"}}}).state("root.about",{url:"/",views:{"container@":{templateUrl:"app/about/about.html",controller:"AboutController",controllerAs:"vm"}}}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("app").config(e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/about/about.html",'<div class=container animate-on-load><div class="md-display-1 motto center-text"><div class="motto-text faded-text"><span class=animate-fade-in animate-on-load ng-if=vm.showDesign>Design, </span><span class=animate-fade-in animate-on-load ng-if=vm.showCreate>Create, </span><span class=animate-fade-in animate-on-load ng-if=vm.showInspire>Inspire.</span></div></div></div><div ng-if=vm.intro><div class="heading animate-fade-in-up container" animate-on-load ng-if=vm.showIntroHeading><h2 class=md-display-1>About</h2></div><section class="container margin-top animate-fade-in-up" animate-on-load ng-if=vm.showIntroText><md-card class="no-margin-h intro-text"><md-card-content><p ng-bind-html=vm.intro></p></md-card-content></md-card></section><div class=container><div class="heading margin-t animate-move-up animate-fade-in" animate-on-load ng-if=vm.showSkillsHeading><h2 class=md-display-1>Skills</h2></div><md-card class="no-margin-h skills-list animate-move-up animate-fade-in" animate-on-load ng-if=vm.showSkillsList><md-card-content><section class=skills-list><div layout=column layout-gt-xs=row layout-wrap><div flex=25 flex-sm=50 flex-xs=100><p class=md-title>Web</p><p ng-repeat="skill in vm.webSkills" class="animate-repeat animate-fade-in" animate-on-load>{{skill}}</p></div><md-divider flex=100 hide-gt-xs></md-divider><div flex=25 flex-sm=50 flex-xs=100><p class=md-title>Design</p><p ng-repeat="skill in vm.designSkills" class="animate-repeat animate-fade-in" animate-on-load>{{skill}}</p></div><md-divider flex=100 hide-gt-xs></md-divider><div flex=25 flex-sm=50 flex-xs=100><p class=md-title>Development</p><p ng-repeat="skill in vm.developmentSkills" class="animate-repeat animate-fade-in" animate-on-load>{{skill}}</p></div><md-divider flex=100 hide-gt-xs></md-divider><div flex=25 flex-sm=50 flex-xs=100><p class=md-title>Digital Media</p><p ng-repeat="skill in vm.digitalMediaSkills" class="animate-repeat animate-fade-in" animate-on-load>{{skill}}</p></div></div></section></md-card-content></md-card></div></div>'),e.put("app/contact/contact.html",'<!-- <div class="page-background experience-background"></div> --><div class="heading animate-fade-in animate-move-up container" animate-on-load><h2 class=md-display-1>Contact</h2></div><section class="container margin-top animate-fade-in animate-move-up" animate-on-load ng-if=vm.showContactInfo><div ng-if=vm.contact><md-card class="no-margin-h contact-info"><md-card-content layout=row><div flex=33><p class="md-title no-margin-v">Email</p><p>{{vm.contact.email}}</p><!-- <md-divider class="margin-v"></md-divider> --><p class="md-title no-margin-v">Phone</p><p>{{vm.contact.phone}}</p><!-- <md-divider class="margin-v"></md-divider> --><p class="md-title no-margin-v">Home Town</p><p>{{vm.contact.address}}</p><div class=social-accounts><md-button href={{vm.contact.facebook}} target=_blank class="md-icon-button facebook" aria-label=More><md-icon md-svg-icon=assets/images/icons/facebook-box.svg></md-icon></md-button><md-button href={{vm.contact.googlePlus}} target=_blank class="md-icon-button googlePlus" aria-label=More><md-icon md-svg-icon=assets/images/icons/google-plus-box.svg></md-icon></md-button><md-button href={{vm.contact.linkedIn}} target=_blank class="md-icon-button linkedIn" aria-label=More><md-icon md-svg-icon=assets/images/icons/linked-in-box.svg></md-icon></md-button><md-button href={{vm.contact.github}} target=_blank class="md-icon-button github" aria-label=More><md-icon md-svg-icon=assets/images/icons/github-box.svg></md-icon></md-button></div></div><div flex=66 layout=row layout-wrap><p class="md-title no-margin-v" flex=100>Send me a message</p><form name=contactForm flex=100 layout=row layout-wrap><md-input-container flex=100><label>Your Name</label><input name=name type=text ng-model=vm.message.name id=name required><div ng-messages=contactForm.name.$error><div ng-message=required>This is required.</div></div></md-input-container><md-input-container flex=100><label>Your Email</label><input name=email type=email ng-model=vm.message.email id=email required><div ng-messages=contactForm.email.$error><div ng-message=email>This field must be a valid email address.</div><div ng-message=required>This is required.</div></div></md-input-container><md-input-container flex=100><label>Message</label><textarea name=message type=text ng-model=vm.message.message id=message required></textarea><div ng-messages=contactForm.message.$error><div ng-message=required>This is required.</div></div></md-input-container><div flex=100><md-button class="md-primary md-raised" ng-click=vm.sendMessage() ng-disabled=contactForm.$invalid>send</md-button></div></form></div></md-card-content></md-card></div></section>'),e.put("app/experience/experience.html",'<!-- <div class="page-background experience-background"></div> --><div class="heading animate-fade-in animate-move-up container" animate-on-load><h2 class=md-display-1>Experience</h2></div><section class=container ng-if=vm.showExperience><div layout=column layout-fill layout-wrap class=clear-both><md-card class="md-padding no-margin-h animate-move-up animate-fade-in" flex=100 animate-on-load><div class="animate-repeat experience-card-text" layout=column ng-repeat="experience in vm.experienceList | orderBy: \'order\'"><h4 class=md-title ng-class="{\'no-margin-t\': $index == 0}">{{experience.position}}</h4><h5 class=md-subhead>{{experience.company}}</h5><h5 class=md-subhead>{{experience.date}}</h5><p>{{experience.role}}</p><p>{{experience.result}}</p><md-divider ng-if="$index !== vm.experienceList.length-1"></md-divider></div></md-card></div></section>'),e.put("app/layout/footer.html",'<div class="container animate-fade-in no-delay-leave" ng-if=vm.showFooter animate-on-load>© 2016 - Design by Devin Cook</div>'),e.put("app/layout/header.html",'<section class="portfolio-header container" layout=row><div class=devin-pic><img alt="Devin Cook" src=assets/images/devin.jpg></div><div class=header-text><h1 class="page-title md-display-1">Devin Cook</h1><span class="page-title md-subhead"><span class=title-1>Front-End Developer / </span><span class=title-2>Interaction Designer</span></span></div></section><section class=navigation-bar><div class=container><md-tabs md-stretch-tabs><md-tab md-active="item.title === $root.activeTab" ng-repeat="item in vm.menu" ng-click=vm.go(item.sref)>{{item.title}}</md-tab></md-tabs></div></section>'),e.put("app/main/main.html",'<div layout=vertical layout-fill><md-content><!--\n    <header>\n      <acme-navbar creation-date="main.creationDate"></acme-navbar>\n    </header>\n--><section class=jumbotron><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class=main.classAnimation ng-click=main.showToastr()>Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),e.put("app/projects/project.view.html",'<section class=container><div class="page-heading animate-fade-in animate-move-up" animate-on-load><!-- Portfolio Heading / Date --><h2 class=md-display-1 ng-bind=vm.project.title></h2><h2 class=md-title>{{vm.project.subtitle}} <span class=faded-text ng-bind=vm.project.date></span></h2></div><div class=clearfix></div><!-- Portfolio Content --><div layout=column class="animate-fade-in animate-move-up" animate-on-load ng-if=vm.showProject><div layout=row layout-wrap layout-align="center start" animate-on-load><div flex=66 flex-sm=100 class=md-whiteframe-z1 ng-if=vm.project.youtubeLink><a class=md-whiteframe-z1 ob-lazytube href={{vm.project.youtubeLink}}>The Sandwich</a></div><div flex=33 flex-sm=100 ng-if="vm.project.youtubeLink && vm.project.images"><div layout=row layout-wrap class=image-gallery><div flex=50 class="md-padding portfolio-gallery-image animate-repeat animate-fade-in animate-move-up" ng-repeat="image in vm.project.thumbs" animate-on-load><div afkl-lazy-image={{image.imgSrc}} class="afkl-lazy-wrapper full-width" ng-click="vm.openGallery($event, $index);"></div></div></div></div></div><md-card class="md-padding no-margin-h portfolio-content" layout=row layout-wrap layout-align="center start"><div layout=row layout-wrap><div ng-if=vm.project.picture flex=33 flex-xs=100 flex-sm=50 class="padding-r padding-b"><!-- <img ng-cloak ng-src="{{vm.project.picture}}"/> --><div afkl-lazy-image={{vm.project.picture}} class=afkl-lazy-wrapper></div></div><div flex flex-xs=100 class=card-content><div ng-bind-html=vm.project.content></div><md-button ng-if=vm.project.githubLink href={{vm.project.githubLink}} target=_blank class="md-raised no-margin-l">View on Github</md-button><md-button ng-if=vm.project.appLink href={{vm.project.appLink}} target=_blank class="md-primary md-raised">Launch App</md-button></div></div><div flex=100><md-divider></md-divider><h4 class=md-title>Roles</h4><md-chips ng-model=vm.project.roles readonly></md-chips></div><div flex=100><h4 class=md-title>Tags</h4><md-chips ng-model=vm.project.tags readonly></md-chips></div></md-card></div></section>'),e.put("app/projects/projects.html",'<div class="heading animate-fade-in animate-move-up container" animate-on-load><h2 class=md-display-1>Projects</h2></div><section class=container ng-if="vm.showProjectList && vm.projects"><div layout=row layout-fill layout-wrap class=clear-both><div class="animate-repeat animate-move-up animate-fade-in" flex=33 flex-xs=100 flex-sm=50 ng-repeat="project in vm.projects | orderBy: \'position\'" animate-on-load><md-card ui-sref="root.projects.view({projectName: vm.getUrl(project.title), project: project})" class="md-padding portfolio-card" layout=row layout-align="start end" layout-wrap ng-if=project><div class=portfolio-image><!-- <img ng-src="{{project.cardImgSrc}}"/> --><div afkl-lazy-image={{project.cardImgSrc}} class="afkl-lazy-wrapper afkl-img-ratio-1-1 full-width"></div></div><div class="portfolio-card-text md-padding" flex=100><h4 class=md-title ng-bind=project.title></h4><h5 class=md-subhead ng-bind=project.subtitle></h5></div></md-card></div></div></section>'),e.put("app/websites/websites.html",'<div class="heading animate-fade-in animate-move-up container" animate-on-load><h2 class=md-display-1>Websites</h2></div><section class=container ng-if="vm.showWebsiteList && vm.websites"><div layout=row layout-fill layout-wrap class=clear-both><div class="animate-repeat animate-move-up animate-fade-in" flex=33 flex-xs=100 flex-sm=100 ng-repeat="website in vm.websites | orderBy: \'position\'" animate-on-load><md-card ui-sref="root.websites.view({websiteName: vm.getUrl(website.title), website: website})" class="md-padding portfolio-card" layout=row layout-align="start end" layout-wrap ng-if=website><div class=portfolio-image><img ng-src={{website.cardImgSrc}}></div><div class="portfolio-card-text md-padding" flex=100><h4 class=md-title ng-bind=website.title></h4><h5 class=md-subhead ng-bind=website.subtitle></h5></div></md-card></div></div></section>'),e.put("app/websites/websites.view.html",'<section class=container><div class="page-heading animate-fade-in animate-move-up" animate-on-load><!-- Portfolio Heading / Date --><h2 class=md-display-1 ng-bind=vm.website.title></h2><h2 class=md-title ng-bind=vm.website.subtitle></h2><span ng-bind=vm.website.date></span></div><div class=clearfix></div><!-- Portfolio Content --><div layout=column class="animate-fade-in animate-move-up" animate-on-load ng-if=vm.showWebsite><div layout=row layout-wrap layout-align="center start" animate-on-load><div flex=66 class=md-whiteframe-z1 ng-if=vm.website.youtubeLink><a class=md-whiteframe-z1 ob-lazytube href={{vm.website.youtubeLink}}>The Sandwich</a></div></div><md-card class="md-padding no-margin-h portfolio-content" layout=row layout-wrap layout-align="center start"><div layout=row layout-wrap><div ng-if=vm.website.picture flex=50 class="padding-r padding-b"><img ng-cloak ng-src={{vm.website.picture}}></div><div flex class=card-content><div ng-bind-html=vm.website.content></div><md-button ng-if=vm.website.appLink href={{vm.website.appLink}} target=_blank class="md-primary md-raised no-margin-l">Visit Website</md-button></div></div><div flex=100><md-divider></md-divider><h4 class="md-title no-margin-b">Roles</h4><md-chips ng-model=vm.website.roles readonly></md-chips></div><div flex=100><h4 class="md-title no-margin-b">Software</h4><md-chips ng-model=vm.website.tags readonly></md-chips></div></md-card></div></section>'),e.put("app/components/galleryModal/gallery.modal.html",'<md-dialog aria-label="{{vm.title}} Gallery" class=gallery-modal><form><md-toolbar><div class=md-toolbar-tools><h2>{{vm.title}} - Gallery</h2><span flex></span><md-button class=md-icon-button ng-click=vm.close()><md-icon class=material-icons aria-label="Close dialog">close</md-icon></md-button></div></md-toolbar><md-dialog-content><div class=md-dialog-content><div afkl-lazy-image={{vm.images[vm.index].imgSrc}} class="afkl-lazy-wrapper full-width"></div><div class=image-description><p class=md-title>{{vm.images[vm.index].title}}</p><p class=md-body-1>{{vm.images[vm.index].caption}}</p></div></div></md-dialog-content><md-dialog-actions layout=row><span flex></span><md-button class=md-primary ng-click=vm.previous() ng-disabled="vm.index === 0">Previous</md-button><md-button class=md-primary ng-click=vm.next() ng-disabled="vm.index === vm.images.length-1">Next</md-button></md-dialog-actions></form></md-dialog>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-d52491534d.js.map
