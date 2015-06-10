angular.module('cVitae', [])
  .controller('cVitaeCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.cvitae = {};
    
    $http.get('cvitae.json')
      .success(function (data) {
        $scope.cvitae = data;
      });
  }]);
