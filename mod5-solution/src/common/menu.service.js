(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
    };

    //Get an specific item 
    service.getMenuItem = function (shortname) {
      var urlmenupath = ApiPath + '/menu_items/' + shortname + '.json';
      return $http.get(urlmenupath).then(function (response){
        
        return response.data;
      }, function errorCallback(response) {
        return null;
      });
      
    };    

}

})();
