var main = angular.module('charedible',['ionic', 'backand'])

    .config(['$stateProvider','$urlRouterProvider', 'BackandProvider', function($stateProvider, $urlRouterProvider, BackandProvider) {
        $urlRouterProvider.otherwise('/home');

        BackandProvider.setAppName('charedible');
        //BackandProvider.setSignUpToken('86b1c1bc-565e-4008-811a-04342b4e82ac');
        BackandProvider.setAnonymousToken('e2acbd32-69e0-4b01-90ff-c5b5f1263dcb');

        var signup = {
            url: '/signup',
            templateUrl:"template/signup.html",
            controller: "signupCtrl"
        };

        var home = {
            url: '/home',
            templateUrl: 'template/home.html',
            controller: 'homeCtrl'
        };

        $stateProvider.state('signup', signup);
        $stateProvider.state('home', home);


    }]);