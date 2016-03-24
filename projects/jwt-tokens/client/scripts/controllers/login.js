'use strict';

angular.module('jwtTokensApp').controller('loginCtrl', function($scope, auth, alert){
  $scope.submit = function() {

    auth.login($scope.email, $scope.password)

      .success(function(res) {
        alert('success', 'Welcome, ' + res.user.email + '!');
      })
      .error(function(err){
        alert('warning', 'Something went wrong: (', err.message);
      });
  };

});

