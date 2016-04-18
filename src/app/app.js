/**
 * Created by sibtain on 16/4/16.
 */

var angularFormApp = angular.module('angularFormApp', [
    'ngRoute'
]);

angularFormApp.config(['$routeProvider', configRoutes]);

configRoutes = function($routeProvider){
   $routeProvider
       .when('/', {
           templateUrl: 'app/Home/home.html',
           controller: 'homeController'
        })
       .when('/newEmployeeForm',{
           templateUrl: 'app/EmployeeForm/efTemplate.html',
           controller: 'efController'
       })
       .otherwise({
           redirectTo: '/'
       });
};

//(function() {
//
//    'use strict';
//
//    var app = angular.module('jarvis_ui', [
//        'ngRoute',
//        'ui.bootstrap'
//    ]);
//
//    app.config(['$routeProvider', configRoutes]);
//
//    configRoutes = function($routeProvider){
//        $routeProvider
//            .when('/',{
//                templateUrl : 'app/home/home.html',
//                controller  : 'HomeCtrl',
//                controllerAs: 'vm'
//            });
//
//        $routeProvider.otherwise('/');
//    }
//
//    app.run(['$route', function ($route) {
//        //Include route to kick start the router.
//    }]);
//
//})();
