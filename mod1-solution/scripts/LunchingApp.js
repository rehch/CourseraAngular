(function(){
    'use strict';
    angular.module('LunchingApp', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope){
        $scope.lunches = "";
        $scope.LunchMessage = "";
        $scope.LunchColor ={
            "color" : "green"
        };
    
        $scope.CheckifTooMuch = function(){
            var TotalofLunches = CountForElements($scope.lunches, ',');
            if(TotalofLunches===0){
                $scope.LunchMessage = "enter data first, come on eat; something";
                $scope.LunchColor ={
                    "color" : "red",
                    "border-color": "red",
                    "border-style": "solid"
                }; 
            }
            else if ( TotalofLunches <= 3) {
                $scope.LunchMessage = "Enjoy it";
                $scope.LunchColor ={
                    "color" : "green", 
                    "border-color": "green",
                    "border-style": "solid"
                };
            }
            else {
                $scope.LunchMessage = "Too much";
                $scope.LunchColor ={
                    "color" : "green", 
                    "border-color": "green",
                    "border-style": "solid"
                };
            }
            //console.log($scope.LunchColor);
        };
    }

    function CountForElements(ListOfLunches, splitfor){
        var ElementCount = 0;
        //var Lunches = Array.from(new Set(ListOfLunches.split(splitfor)));
        var Lunches =[...new Set(ListOfLunches.split(splitfor))];
        
        //console.log(Lunches);

        Lunches.forEach(element => {
            if(element != ""){
                ElementCount++;
            }
        });
        return ElementCount;
    }
    
})()