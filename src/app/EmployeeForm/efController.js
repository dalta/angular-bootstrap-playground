/**
 * Created by sibtain on 17/4/16.
 */

angularFormApp.controller('efController', function($scope, efService){

        $scope.employee = efService.employee;

        $scope.industryList = [
            'Teaching',
            'Finance',
            'Engineering',
            'Medical'
        ];
        
        $scope.submitForm = function (emp) {
                console.log(emp)
        }
});
