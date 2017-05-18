'use strict';

/* Inject Dependencies */
HomeController.$inject = ['$scope', '$location', '$state', 'AppConstants','toastr','HomeService'];

/**
 * Controller responsible for managing dummy data
 * =============================================================================
 *
 * @param {[type]} $scope       [description]
 * @param {[type]} $location    [description]
 * @param {[type]} $state       [description]
 * @param {[type]} AppConstants [description]
 */
function HomeController($scope, $location, $state, AppConstants, toastr,HomeService) {
	var self = this;

  //============================================================================
  //                            INIT BLOCK                                    //
  //============================================================================
	self.welcomeMsg = "";

  //============================================================================
  //                            EVENTS BLOCK                                  //
  //============================================================================

  // Gets called when the page has completed loading
  $scope.$on('$stateChangeSuccess', function() {

		if($state.current.name === "home"){
			self.welcomeMsg = "Hello";
			self.cartItems = [];
			self.cartItemsList = [];



		}

	});

  //============================================================================
  //                            FUNCTIONS BLOCK                               //
  //============================================================================

	self.end = function(directiveData){
		self.tmp = true;
		self.selectedProduct = directiveData;

	}

	self.add = function(){
		var temp = 0;
		var flag = "true";
			var length = self.cartItemsList.length;
			if(self.selectedProduct.availability > 0){
				if(self.cartItemsList.length == 0){
					self.cartItemsList.push(self.selectedProduct);
					//console.log(self.cartItemsList);
					self.selectedProduct.availability = self.selectedProduct.availability-1;
			 		self.selectedProduct.orderQunatity = self.selectedProduct.orderQunatity+1;
				}
				else {
					angular.forEach(self.cartItemsList, function(row, index) {
						if(row == self.selectedProduct){
							temp = index;
							flag = "false";
							console.log(temp);
						}
					});
					    if(flag == "false"){
								self.cartItemsList[temp].availability = self.cartItemsList[temp].availability-1;
						  		self.cartItemsList[temp].orderQunatity = self.cartItemsList[temp].orderQunatity+1;
							}
							else {
								self.cartItemsList.push(self.selectedProduct);
								//console.log(self.cartItemsList);
								self.selectedProduct.availability = self.selectedProduct.availability-1;
						 		self.selectedProduct.orderQunatity = self.selectedProduct.orderQunatity+1;
							}
				}
			toastr.success("Added\t" +self.selectedProduct.name+ "\tto cart");
}
		if(self.selectedProduct.availability<=0){
			//consolelog("ddsnl");
			toastr.error("Product Not Available");
		}
		//self.buttonAdd = true;
	}
	/**
	 * Change the welcome msg
	 *
	 * @return {[type]} [description]
	 */
self.remove = function(index){
	if(self.cartItemsList[index].orderQunatity > 0){
		console.log(index);
		self.cartItemsList[index].availability++;
		self.cartItemsList[index].orderQunatity--;
	}


// 	var temp = 0;
// 	var flag = "false";
// 		var length = self.cartItemsList.length;
// 			if(self.cartItemsList.length == 0){
// 				self.cartItemsList.push(self.selectedProduct);
// 				//console.log(self.cartItemsList);
// 				self.selectedProduct.availability = self.selectedProduct.availability+1;
// 				self.selectedProduct.orderQunatity = self.selectedProduct.orderQunatity-1;
// 			}
// 			else {
// 				angular.forEach(self.cartItemsList, function(row, index) {
// 					if(row == self.selectedProduct){
// 						temp = index;
// 						flag = "true";
// 						console.log(temp);
// 					}
// 				});
// 						if(flag == "true"){
// 							self.cartItemsList[temp].availability = self.cartItemsList[temp].availability+1;
// 								self.cartItemsList[temp].orderQunatity = self.cartItemsList[temp].orderQunatity-1;
// 						}
// 						else {
// 							self.cartItemsList.push(self.selectedProduct);
// 							//console.log(self.cartItemsList);
// 							self.selectedProduct.availability = self.selectedProduct.availability+1;
// 							self.selectedProduct.orderQunatity = self.selectedProduct.orderQunatity-1;
// 						}
// 			}
// 		toastr.success("Removed\t" +self.selectedProduct.name+ "\tFrom cart");
//
// }
//
// 	self.changeMsg = function(){
//
// 		self.welcomeMsg = self.welcomeMsg + " " + self.name;
	};


};

// Export the module
module.exports = {
  name : 'HomeController', // Change this name
  fn : HomeController, // Change this function name
	type : 'controller'
};
