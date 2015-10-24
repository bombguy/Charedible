/**
 * Created by Leslie on 9/8/2015.
 */

main.run(function($rootScope, $location) {
    $rootScope.$location = $location;
});


main.config(['$stateProvider','$urlRouterProvider','$urlMatcherFactoryProvider','$ionicConfigProvider', function( $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider, $ionicConfigProvider){

    //test server
    //Parse.initialize("vvoSroG4nwOZCBUPfYAVBY2D56PUxm4IF0rCNCcB", "P7I4vAwg5k2W3ZlPb7kSHfnvFeRKJuNKvMotwLxP");

    //acutal server
    Parse.initialize("smQF93xertH0I53qI3XJpDpX12L6aiuUcOPDZGrX", "dTCt7u0Jo7cv2sj3zbm6ZxpmpVoP6dBMBKONZzjP");

    var transaction = {
        url: '/transaction',
        templateUrl: "templates/transactions.html",
        controller: "TransactionCtrl"
    };

    var signup = {
        url: '/signup',
        templateUrl:"templates/sign_up.html",
        controller: "signupCtrl"
    };

    var login = {
        url:'/login',
        templateUrl:"templates/login.html",
        controller:"loginCtrl"
    };

    var email_signin = {
        url: "/signin",
        templateUrl:"templates/email_login.html",
        controller: "email-loginCtrl"
    };

    var resetPassword ={
        url: "/resetPassword",
        templateUrl:"templates/reset_password.html",
        controller: "resetPwCtrl"
    };

    var setting = {
        url: '/setting',
        templateUrl:"templates/settings.html",
        controller: "settingCtrl"
    };


    var contribute = {
        url: '/contribute',
        params:{data:null, isHome:false},
        templateUrl:"templates/contribute.html",
        controller: "contributeCtrl"
    };

    var edit_profile = {
        url: '/edit_profile',
        templateUrl:"templates/edit_profile.html",
        controller: "editProfileCtrl"
    };

    //var zendesk = {
    //    url: '/messaging',
    //    templateUrl:"templates/zendesk_messaging.html",
    //    controller: "zendeskCtrl"
    //};

    var details = {
        url: 'details',
        templateUrl: "templates/details.html",
        controller: "detailsCtrl"
    };

    var tab = {
        url:"/tab",
        abstract:true,
        templateUrl:"templates/tabs.html"
    };


    var home_tab = {
        url:"/home",
        views:{
            'home-tab':{
                templateUrl: "templates/home.html",
                controller:'HomeCtrl'
            }
        }
    };
    var search_tab = {
        url:'/search',
        views:{
            'search-tab':{
                templateUrl:"templates/search.html",
                controller: "algoliaCtrl"
            }
        }
    };

    var profile_tab = {
        url:'/profile',
        views:{
            'profile-tab':{
                templateUrl:"templates/profile.html",
                controller:"ProfileCtrl"
            }
        }
    };

    var transfer_tab = {
        url:'/transfer',
        views:{
            'transfer-tab':{
                templateUrl:"templates/transfer.html",
                controller:"TransferCtrl"
            }
        }
    };

    //$urlRouterProvider.when($urlMatcherFactoryProvider.compile("/signup"), function($state) {
    //    $state.go('signup');
    //});

    $stateProvider.state('signup', signup);
    $stateProvider.state('signin', email_signin);
    $stateProvider.state('login', login);
    $stateProvider.state('resetPassword', resetPassword);
    $stateProvider.state('setting', setting);
    $stateProvider.state('contribute', contribute);
    $stateProvider.state('edit_profile', edit_profile);
    $stateProvider.state('transaction', transaction);
    $stateProvider.state('details', details);
    //$stateProvider.state('zendesk', zendesk);

    $stateProvider.state('tabs', tab);
    $stateProvider.state('tabs.home',home_tab);
    $stateProvider.state('tabs.search', search_tab);
    $stateProvider.state('tabs.profile',profile_tab);
    $stateProvider.state('tabs.transfer', transfer_tab);


    $urlRouterProvider.otherwise("/tab/home");

    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');


}]);

