main.controller('homeCtrl', ['$scope','$state', function ($scope, $state) {
    console.log("homeCtrl loaded");

    $scope.goSignup = function () {
        $state.go("signup");
    };

}]);