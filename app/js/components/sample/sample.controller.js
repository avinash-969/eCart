'use strict';

/* Inject Dependencies */
SampleController.$inject = ['$scope', '$location', '$state', 'AppConstants'];

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
function SampleController($scope, $location, $state, AppConstants) {
	var self = this;

  //============================================================================
  //                            INIT BLOCK                                    //
  //============================================================================


  //============================================================================
  //                            EVENTS BLOCK                                  //
  //============================================================================

  // Gets called when the page has completed loading
  $scope.$on('$stateChangeSuccess', function() {

		if($state.current.name == "sample"){
			console.log("sample");
		}
		if($state.current.name == "sample1"){
			console.log("sample1");
		}

	});

  //============================================================================
  //                            FUNCTIONS BLOCK                               //
  //============================================================================

	self.changeMsg1 = function(){
		console.log("Button Action");
	}



};

// Export the module
module.exports = {
  name : 'SampleController', // Change this name
  fn : SampleController, // Change this function name
	type : 'controller'
};
