var main = angular.module('charedible',['ionic'])

    .config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        //$urlRouterProvider.otherwise('/home');

        //Connect to Parse
        Parse.initialize("RHG3LzmUb4uICa75WAoSE5OEOUMaQ1EYjMJnH9AU", "o9qaHXKKJa4sMsIUjSYaCHc0kw2rTG4AUjP2Jquo");

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