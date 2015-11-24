angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.schedule', {
      url: "/schedule",
      views: {
        'schedule-tab': {
          templateUrl: "templates/schedule.html",
          controller: 'ScheduleTabCtrl'
        }
      }
    })
      .state('tabs.map', {
      url: "/map",
      views: {
        'map-tab': {
          templateUrl: "templates/map.html"
        }
      }
    })
      .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    })
    
    .state('tabs.about', {
      url: "/about",
      views: {
        'blank-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    
    .state('tabs.rules', {
      url: "/rules",
      views: {
        'blank-tab': {
          templateUrl: "templates/rules.html"
        }
      }
    })
    .state('tabs.faq', {
      url: "/faq",
      views: {
        'blank-tab': {
          templateUrl: "templates/faq.html"
        }
      }
    })
  .state('tabs.guests', {
      url: "/guests",
      views: {
        'blank-tab': {
          templateUrl: "templates/guests.html"
        }
      }
    })
  .state('tabs.events', {
      url: "/events",
      views: {
        'blank-tab': {
          templateUrl: "templates/events.html"
        }
      }
    })
  .state('tabs.panels', {
      url: "/panels",
      views: {
        'blank-tab': {
          templateUrl: "templates/panels.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/schedule");

})
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
})
.controller('ScheduleTabCtrl', function($scope) {
}); 