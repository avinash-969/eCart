'use strict';

/* Inject Dependencies */
Home1Controller.$inject = ['$scope', '$location', '$state', 'AppConstants'];

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
function Home1Controller($scope, $location, $state, AppConstants) {
	var self = this;

  //============================================================================
  //                            INIT BLOCK                                    //
  //============================================================================


  //============================================================================
  //                            EVENTS BLOCK                                  //
  //============================================================================

  // Gets called when the page has completed loading
  $scope.$on('$stateChangeSuccess', function() {

		if($state.current.name == "home1"){
			self.emp = {
        empName : "",
        Price : "",
        Quantity : ""
      }
      self.allEmp = [
        {
          Name: "abc",
          Price: "25",
          Quantity: "10",
          age: "30"
        },
        {
          Name: "abc1",
          Price: "25",
          Quantity: "10",
          age: "40"
        },{
          Name: "abc2",
          Price: "25",
          Quantity: "10"
        }
      ];
		}

	});

  //============================================================================
  //                            FUNCTIONS BLOCK                               //
  //============================================================================

	self.changeMsg1 = function(){
		console.log("Button Action");
	}

  self.fetch = function(){
    self.temp=true;
    angular.forEach(self.allEmp, function(row, index) {
      if(self.emp.empName == row.Name){
        console.log(row);
        self.emp.Price = row.Price;
        self.emp.Quantity = row.Quantity;
        console.log(index);
      }
    });
  //  console.log(self.emp.empDetails);
    // if(self.empname){
    // self.empname.empdetails  =  [{
    //     Name: "abc",
    //     Price: "25",
    //     Quantity: "10"
    //   }, {
    //     Name: "Bag",
    //     Price: "100",
    //     Quantity: "15"
    //   }, {
    //     Name: "Pen",
    //     Price: "15",
    //     Quantity: "13"
    //   }];
    // }
		console.log(self.emp.empName);

	}

};

// Export the module
module.exports = {
  name : 'Home1Controller', // Change this name
  fn : Home1Controller, // Change this function name
	type : 'controller'
};
