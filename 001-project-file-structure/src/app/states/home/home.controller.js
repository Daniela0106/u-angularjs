(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  HomeController.inject = ['$state'];

  /** @ngInject */
  function HomeController($state) {
    var vm = this;
    vm.mainTitle = 'Talos Training Program';
    vm.signUpToday = signUpToday;
    var userEmail = '';

    function signUpToday(){
      swal({
        title: 'Type in your email address',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function (email) {
          userEmail = email;
          return new Promise(function (resolve, reject) {
            setTimeout(function() {
              if (email === 'taken@example.com') {
                reject('This email is already taken.')
              } else {
                resolve()
              }
            }, 2000)
          })
        },
        allowOutsideClick: false
      }).then(function () {
        swal({
          title: 'Enter your password',
          input: 'password',
          inputAttributes: {
           'maxlength': 10,
           'autocapitalize': 'off',
           'autocorrect': 'off'
          }
        }).then(function (password) {
          if (password) {
            swal({
             type: 'success',
             html: 'Welcome!'
            });
            $state.go('dashboard', {email: userEmail});
          }
        });
      });
    }

  }
})();
