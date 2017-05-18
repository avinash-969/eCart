'use strict';

/* Inject Dependencies */
SampleService.$inject = ['$http', '$q', 'AppConstants', 'FormUtils',
'Base64', 'SessionService'];

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
function SampleService($http, $q, AppConstants, FormUtils, Base64,
  SessionService){

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
    INSTANCE.dummy  = function(params){
      var deferred = $q.defer();
      $http.post(/** URL DETAILS HERE **/)
      .success(function(response, status, headers, config) {
        deferred.resolve(response) }).error(
      function(data, status, headers, config){
        deferred.reject(data)
      });
      // return your promise to the user
      return deferred.promise;

    };

    /** functions exposed by the service **/
    return INSTANCE;
}

// Export the module
module.exports = {
  name : 'SampleService', // Change this name
  fn : SampleService // Change this function name
};
