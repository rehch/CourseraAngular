(function () {
    'use strict';
    
  const newLocal = 'ItemDetailController as itemDetail';
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/templates/menu/item-detail.template.html',
      controller: newLocal,
      bindings: {
        menuitems: '<'
      }
    })
    
    })();
    