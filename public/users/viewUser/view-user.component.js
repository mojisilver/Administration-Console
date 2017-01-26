'use strict';

angular.module('users')

    .component('viewUser', {

        templateUrl:'users/viewUser/view-user.template.html',

        controller:('viewUserController' , [ 'usersService', '$stateParams',

            function (usersService, $stateParams) {

                this.user= usersService.get({id: $stateParams.id });
            }
        ])
});



