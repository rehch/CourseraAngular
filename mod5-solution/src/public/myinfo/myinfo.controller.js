(function(){
'use strict';

angular.module('public')
.controller('MyinfoController',MyinfoController)

MyinfoController.$inject = ['MenuService','userinfoservice']
function MyinfoController(MenuService, userinfoservice) {
    var service = this;

    service.userinformation = userinfoservice.UserInfo();
    
    if(service.userinformation){

        var res = MenuService.getMenuItem(service.userinformation.favorite);
        res.then(function (response){
            service.favorites = [];
            service.favorites.push(response);
        })
    }


}
}());