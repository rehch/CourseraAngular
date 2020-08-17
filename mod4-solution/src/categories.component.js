(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('catList', {
      templateUrl: 'src/templates/menu/categories.template.html',
      bindings: {
        allcategories: '<'
      }
    });
    
    })();
    