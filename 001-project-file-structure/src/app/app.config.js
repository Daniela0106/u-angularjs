(function() {
  'use strict';

  angular
    .module('angularEx1')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }	

})();
