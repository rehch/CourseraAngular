(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/templates/menu/home.template.html'
      })
    
      // Categories page
      .state('catList', {
        url: '/cat-List',
        templateUrl: 'src/templates/menu/categories.template.html',
        controller: 'CategoriesController as catList',
        resolve: {
          allcategories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })
    //Item Distribution
      .state('Items', {
        url: '/item-detail/{catID}/Items',
        templateUrl: 'src/templates/menu/item-detail.template.html',
        controller: "ItemDetailController as itemDetail",
        resolve : {
            menuitems :['MenuDataService', '$stateParams',  
                function (MenuDataService, $stateParams) {
                    return MenuDataService.getMenuForCategory($stateParams.catID);
                }
        ]
        }
      });
    
    }
    
    })();
    