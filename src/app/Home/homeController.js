/**
 * Created by sibtain on 18/4/16.
 */

angularFormApp.controller('homeController', function($scope, $location){

    $scope.addNewEmployee = function(){
      $location.patch('/newEmployeeForm');
    };

});
