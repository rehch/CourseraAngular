(function() {
    "use strict";
    angular.module('public')
    .controller('RegistrationController', RegistrationController);
    
    RegistrationController.$inject = ['MenuService','userinfoservice'];
    function RegistrationController(MenuService, userinfoservice) {
        var reg = this

        reg.IsOk = false;
        reg.DishNotFound = false;
        reg.firstname = "";
        reg.lastname = "";
        reg.email = "";
        reg.favorite = "";
        reg.phone = "";

        reg.save = function () {
            
            var res = MenuService.getMenuItem(reg.favorite);


            var promise = res;
            promise.then(function success(response){
                if(response){
                    reg.IsOk = true;
                    reg.DishNotFound = false;
                    
                    var newregistereduser ={
                        firstname: reg.firstname,
                        lastname: reg.lastname,
                        email : reg.email,
                        phone : reg.phone,
                        favorite: reg.favorite
                    };
                    userinfoservice.UserSignUp(newregistereduser);
                }
                else {
                    reg.IsOk = false;
                    reg.DishNotFound = true;
    
                }

            }, function errorcallback(response){
                reg.IsOk = false;
                reg.DishNotFound = true;
            });

             
        };
    }
    })();
    