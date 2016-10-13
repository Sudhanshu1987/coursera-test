(function () {
'use strict';

angular.module('LunchCheck', [])

angular.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject($scope);

function LunchCheckController($scope) {
  $scope.lunch = "";

  $scope.myMessage = checkLunchItems($scope.lunch);
}

function checkLunchItems(lunch){
  if(!lunch){
    return "Please enter data first";
  }

  var arr = name.split(",");

  if(arr.length <= 3 ){
    return "Enjoy!";
  }
  else {
    return "Too much!";
  }
}
})();
