'use strict';

/* Inject Dependencies */
myCustom1.$inject = ['$rootScope', '$templateCache', '$compile', 'HomeService'];

/**
* form component
* =============================================================================
* This directive is used to show form based on the template that
* is requested
*
* @param  {[type]} ManageUsersService [description]
* @param  {[type]} SessionService     [description]
* @param  {[type]} toastr             [description]
* @param  {[type]} $rootScope         [description]
* @param  {[type]} $templateCache     [description]
* @param  {[type]} $compile           [description]
* @return {[type]}                    [description]
*/
function myCustom1($rootScope,$templateCache, $compile, HomeService){
 return {
   restrict: 'A', // It is an attribute
   require : '?ngModel',
   scope: {
     formTemplate:'@',
     directiveEndFn: '&',
     ngModel:'='
   },
   //bindToController: true,
   link: function (scope, elem, attrs, ctrl) {
     // Check if print header is required
     console.log(scope.formTemplate);
   },
   templateUrl : "./app/shared/my-custom1/myCustom1.html",
   controller : ['$scope', '$compile', '$element',
   function(scope, $compile, $element){

     // Initialize
     var self = this;

     HomeService.dummy().then(function(response){
       console.log("from service");
       self.products = response.data;
          console.log(response.data);
        }, function(error){
        console.log(error);
    });



     self.change = function(){
      scope.directiveEndFn({directiveData: self.selectedProduct});
     }

    //  scope.$watch("self.selectedProduct", function(myModelValue){
    //         self.myObj = myModelValue;
    //    });
     //
    //   scope.directiveEndFn({directiveData: self.myObj});
    //   console.log(self.myobj);
     //
    //        self.selectedProduct = self.selectedProducts[0].productId;
    //        //self.selectedProduct1 = self.selectedProducts[0].productId;

   }],
   controllerAs : 'model'
 };
};


// Export the module
module.exports = {
 name : 'myCustom1',
 fn : myCustom1,
 type : 'directive'
};
