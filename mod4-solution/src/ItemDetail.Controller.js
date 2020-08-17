(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('ItemDetailController', ItemDetailController);
    
    
    ItemDetailController.$inject = ['menuitems'];
    function ItemDetailController(menuitems)  {
      var itemList = this;
      
      itemList.menuitems = menuitems.data['menu_items'];
    }
    
    })();
    