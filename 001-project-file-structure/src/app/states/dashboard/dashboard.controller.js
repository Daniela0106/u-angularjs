(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('DashboardController', DashboardController);

  DashboardController.inject = ['$stateParams'];

  /** @ngInject */
  function DashboardController($stateParams) {
    var vm = this;

    vm.userEmail = $stateParams.email;
  }
})();