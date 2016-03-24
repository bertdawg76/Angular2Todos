angular.module('jwtTokensApp').controller('adminCtrl', function($scope, $http, API_URL, alert){
  $http.get(API_URL + 'users').success(function(users){
    $scope.users = users;
  }).error(function(err){
    alert('warning', "Unable to get users", err.message);

  })
});
