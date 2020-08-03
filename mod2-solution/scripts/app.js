(function(){
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var ToBuyItems = this;
        //ToBuyItems.ItemName = "";
        //ToBuyItems.ItemQuantity = "";
        
        ToBuyItems.items = ShoppingListCheckOffService.getPendingItems();
        
        ToBuyItems.removeItem = function(ItemIndex){
            
            ShoppingListCheckOffService.addPurshacedItem(ToBuyItems.items[ItemIndex].name,ToBuyItems.items[ItemIndex].quantity);
            ShoppingListCheckOffService.removeItem(ItemIndex);
            
        };
        
    };

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', '$scope'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var PurchasedItems = this;
        //var ToBuyItems = this;
        
        PurchasedItems.ItemName = "";
        PurchasedItems.ItemQuantity = "";
        

        PurchasedItems.addPurshacedItem = function(){
            ShoppingListCheckOffService.addPurshacedItem(PurchasedItems.ItemName,PurchasedItems.ItemQuantity);
        
        }

        PurchasedItems.items = ShoppingListCheckOffService.getPurshacedItems();
    };

    function ShoppingListCheckOffService(){
        var service = this;

        var PendingItems  = [
            {name : "Cookies", quantity:"10 bags"},
            {name : "Coke", quantity:"5 bottles"},
            {name : "Coffe", quantity:"1 bottle"},
            {name : "Candies", quantity:"1 bag"},
            {name : "Chips", quantity:"100 bags"}
        ];

        

        var PurchasedItems = [];

        service.addPurshacedItem = function (ItemName, quatity){
            var item = {
                name : ItemName,
                quantity : quatity
            };
            PurchasedItems.push(item);
        };
        service.removeItem = function (itemIndex){
            PendingItems.splice(itemIndex, 1);
        };

        service.getPendingItems = function () {
            return PendingItems;
          };

        service.getPurshacedItems  = function(){
            return PurchasedItems;
        };
        
    };

})()