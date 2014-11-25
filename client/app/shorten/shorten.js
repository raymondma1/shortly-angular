angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  angular.extend($scope, Links);
  $scope.addLink = function(){
    Links.addLink($scope.link).then(function(){
      $scope.link = {};
    });
  };
});


