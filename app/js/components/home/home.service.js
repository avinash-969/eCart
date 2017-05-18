'use strict';

/* Inject Dependencies */
HomeService.$inject = ['$http', '$q', 'AppConstants'];

/**
 * Service to manage all dummy operations
 * =============================================================================
 *
 * @param {{type}} $http        [description]
 * @param {[type]} $q           [description]
 * @param {[type]} AppConstants [description]
 * @param {[type]} FormUtils    [description]
 * @param {[type]} SessionService    [description]
 */
function HomeService($http, $q, AppConstants){

    // Service instance variable
    var INSTANCE = {};

    /**
     * Dummy Comment
     * =========================================================================
     * Lorem Ipsum is simply dummy text of the printing and typesetting.
     * Lorem Ipsum has been the industry's standard dummy text ever since the
     * 1500s, when an unknown printer took a galley of type and scrambled it
     * to make a type specimen book.
     *
     * @param  {[type]} params      [description]
     * @return {[type]}             [description]
     */
    INSTANCE.dummy  = function(){
      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: 'home.json'
      }).then(function(response, status, headers, config) {
          deferred.resolve(response)
          // this callback will be called asynchronously
          // when the response is available
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

      // $http.get('home.json')
      // .success(function(response, status, headers, config) {
      //   deferred.resolve(response) }).error(
      // function(data, status, headers, config){
      //   deferred.reject(data)
      // });
      // return your promise to the user
      return deferred.promise;

    };

    /** functions exposed by the service **/
    return INSTANCE;
}

// Export the module
module.exports = {
  name : 'HomeService', // Change this name
  fn : HomeService // Change this function name
};
