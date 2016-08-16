import './main.css';
import angular from 'angular';
import cowsay from 'cowsay-browser';
import getTest from './test';

const app = angular.module('myApp', []);

app.controller('main', function($scope){
  $scope.name = 'your name here';
  $scope.phrase = 'Mooooooo';
  $scope.toggle = function(){
    $scope.greeting = !$scope.greeting;
  };
  $scope.cow = function(phrase){
    return cowsay.think({
      text: phrase,
      e: 'oO',
      T: 'U'
    });
  };
});

console.log(getTest());
