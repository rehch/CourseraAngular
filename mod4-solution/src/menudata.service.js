(function () {
    'use strict';
    
    angular.module('data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    MenuDataService.$inject = ['$http', 'ApiBasePath']
    function MenuDataService ($http, ApiBasePath) {
      var service = this;

      service.getAllCategories = function () {
       
          const catjson = "/categories.json";
        var response = $http({
          method: "GET",
          url: (ApiBasePath + catjson)
        });
        
        
        return response;
      };
      

    
      service.getMenuForCategory = function (shortName) {
        
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
          params: {
            category: shortName
          }
        });
    
        return response;
        
      };
    }
    
    })();
    