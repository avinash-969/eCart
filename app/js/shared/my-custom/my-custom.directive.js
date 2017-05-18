'use strict';

/* Inject Dependencies */
myCustom.$inject = ['$rootScope', '$templateCache', '$compile'];

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
function myCustom($rootScope,$templateCache, $compile){
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
   templateUrl : "./app/shared/my-custom/myCustom.html",
   controller : ['$scope', '$compile', '$element',
   function(scope, $compile, $element){

     // Initialize
     var self = this;

     scope.$watch("self.mycus", function(myModelValue){
            self.myObj = myModelValue;
       });

    self.submit = function(){
      scope.directiveEndFn({directiveData: self.myObj});
      console.log(self.emailId);
    }



   }],
   controllerAs : 'model'
 };
};


// Export the module
module.exports = {
 name : 'myCustom',
 fn : myCustom,
 type : 'directive'
};
