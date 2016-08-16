import './main.css';
import angular from 'angular';
const cowsay = require('cowsay-browser');

const app = angular.module('myApp',[]);

app.controller('main', function($scope){

  //$scope.inputFromController = $scope.input;

  $scope.changer = function() {
    const cow = cowsay.say({
      text : $scope.input
    });
    $scope.inputFromController = cow;
  };

});
