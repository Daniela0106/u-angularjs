(function() {
  'use strict';

  angular
    .module('angularEx1')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  /** @ngInject */
  function HomeController() {
    var vm = this;
    vm.mainTitle = 'Talos Training Program';
    vm.signUpToday = signUpToday;

    function signUpToday(){
      // var person = prompt("Please enter your name:", "Your name here");
      // if (person == null || person == "") {
      //   vm.txt = "User cancelled the prompt.";
      // } else {
      //   vm.txt = "Hello " + person + "! How are you today?";
      //   alert(person + ", Welcome to Talos Digital!");
      // }

     swal({
        title: 'Submit email to run ajax request',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function (email) {
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
      }).then(function (email) {
        swal({
          type: 'success',
          title: 'Ajax request finished!',
          html: 'Submitted email: ' + email
        })
      })
    }

  }
})();
