'use strict';

/* Inject Dependencies */
DummyController.$inject = ['$scope', '$location', '$state', 'AppConstants',
'AuthenticationService', 'toastr', 'SessionService'];

/**
 * Controller responsible for managing dummy data
 * =============================================================================
 *
 * @param {[type]} $scope                [description]
 * @param {[type]} $location             [description]
 * @param {[type]} AppConstants          [description]
 * @param {[type]} AuthenticationService [description]
 * @param {[type]} toastr                [description]
 * @param {[type]} SessionService        [description]
 */
function DummyController($scope, $location, $state, AppConstants,
	AuthenticationService, toastr, SessionService) {
	var self = this;

  //============================================================================
  //                            INIT BLOCK                                    //
  //============================================================================


  //============================================================================
  //                            EVENTS BLOCK                                  //
  //============================================================================

  // Gets called when the page has completed loading
  $scope.$on('$stateChangeSuccess', function() {

	});

  //============================================================================
  //                            FUNCTIONS BLOCK                               //
  //============================================================================





};

// Export the module
module.exports = {
  name : 'DummyController', // Change this name
  fn : DummyController, // Change this function name
	type : 'controller'
};
