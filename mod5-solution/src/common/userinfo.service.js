(function (){
    'use strict';
    angular.module('common')
    .service('userinfoservice', userinfoservice)

    function userinfoservice (){
        var service = this;
        var userinfo;

        service.UserSignUp = function(newuser){
            userinfo = newuser;
        }

        service.UserInfo = function(){
            return userinfo;
        }
    }
}());