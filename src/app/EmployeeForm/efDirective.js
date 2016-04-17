/**
 * Created by sibtain on 17/4/16.
 */

angularFormApp.directive('employeeForm', function(){
   return {
       restrict: 'E', //this directive can only be used as element
       templateUrl: 'app/EmployeeForm/efTemplate.html'
   };
});