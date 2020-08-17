(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);
    
    
    CategoriesController.$inject = ['allcategories'];
    function CategoriesController(allcategories) {
      var categoriesList = this;
      categoriesList.allcategories = allcategories.data;
      
    }
    
    })();
    