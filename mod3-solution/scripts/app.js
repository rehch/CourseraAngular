(function () {
  'use strict';
  
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController )
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', foundItemsDirective) ;
  
  function foundItemsDirective (){
    var ddo = {
      templateUrl: 'findinglist.html',
      scope: {
        found: '<',
        onRemove: '&'
      },
      controller: NarrowItDownController,
      controllerAs: 'ctrNarrow',
      bindToController: true
    };
  
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrNarrow = this;
    ctrNarrow.found = []
    ctrNarrow.searchterm = "";
    ctrNarrow.Message = "";

    ctrNarrow.FindingItems = function (shortName) {
   
      ctrNarrow.found = MenuSearchService.getMatchedMenuItems(shortName);
      
  
    };
    ctrNarrow.removeItem = function (itemIndex) {
      ctrNarrow.found.splice(itemIndex,1);

    };
    ctrNarrow.NothingFound = function(){
      if(ctrNarrow.found.length == 0){
        ctrNarrow.Message = "Nothing found!!";
      }

      return ctrNarrow.found.length == 0;

    };
  }
 
  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };


  service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")/*,
      params: {
        category: shortName
      }*/
    });

    return response;
  };

  service.getMatchedMenuItems= function(searchTerm) {
    var foundItems = [];
    if(searchTerm != ""){
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")/*,
        params: {
          category: shortName
        }*/
      });

      var promise = response;
      

      promise.then(function (response) {
        var returitems = response.data;
        
        returitems.menu_items.forEach(menuitem => {
          if(menuitem.description.toUpperCase().includes(searchTerm.toUpperCase())){
            //if(foundItems.indexOf(menuitem.name) === -1){
              var menufound ={
                name : menuitem.name,
                short_name : menuitem.short_name,
                description: menuitem.description
              };
        
              foundItems.push(menufound);

            //}
            
          }
        });


      })
      .catch(function (error) {
        console.log(error);
      })
    }
    return foundItems;
  }

}

  })();
  