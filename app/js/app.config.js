/* Inject Dependencies */
AppConfig.$inject = ["$stateProvider", "$locationProvider", 'AppConstants',
"$urlRouterProvider", "$compileProvider", "$httpProvider", "toastrConfig"];


function AppConfig($stateProvider, $locationProvider, AppConstants,
  $urlRouterProvider, $compileProvider, $httpProvider, toastrConfig){

  // Show debug info based on environment check
  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  // Configure the application routes
  $stateProvider
  // HOME STATES AND NESTED VIEWS ==============================================
  .state('home', {
    url: '/home',
    //authenticate: false,
    views : {
      'main' : {
        templateUrl: './app/components/home/home.html',
        controller : 'HomeController',
        controllerAs : 'model'
      }
    }
  })
  .state('sample', {
    url: '/sample',
    //authenticate: false,
    views : {
      'main' : {
        templateUrl: './app/components/sample/sample.html',
        controller : 'SampleController',
        controllerAs : 'model'
      }
    }
  })
  .state('home1', {
    url: '/home1',
    //authenticate: false,
    views : {
      'main' : {
        templateUrl: './app/components/home1/home1.html',
        controller : 'Home1Controller',
        controllerAs : 'model'
      }
    }
  })
  .state('check-out', {
    url: '/check-out',
    //authenticate: false,
    views : {
      'main' : {
        templateUrl: './app/components/checkout/checkOut.html',
        controller : 'checkOutController',
        controllerAs : 'model'
      }
    }
  })
  .state('sample1', {
    url: '/sample1',
    //authenticate: false,
    views : {
      'main' : {
        templateUrl: './app/components/sample/sample1.html',
        controller : 'SampleController',
        controllerAs : 'model'
      }
    }
  });

  // If any route is not found then navigate to default route
  $urlRouterProvider.otherwise('/home1');

  // ===========================================================================
  // Configure vendor libraries if attached
  // ===========================================================================
  angular.extend(toastrConfig, {
    closeButton: true,
    extendedTimeOut: 1000,
    timeOut: 3000,
  });
}

// Export the module
module.exports = AppConfig;
