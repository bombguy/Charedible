main.controller('signupCtrl', ['$scope','$state', function ($scope, $state) {
    $scope.data = {
        username: "cshin3@uci.edu",
        password: "12345678"
    };

    $scope.random = function () {
        $scope.data.username = $scope.data.username + "1";
        $scope.data.password = $scope.data.password + "2";
        console.log($scope.data);
    };

    $scope.goHome = function () {
        $state.go("home");
    };

    console.log("signupCtrl loaded");
}]);