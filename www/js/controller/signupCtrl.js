main.controller('signupCtrl', ['$scope','$state', function ($scope, $state) {
    $scope.data = {
        username: "user",
        password: "pass"
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