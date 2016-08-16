import cow from 'cowsay-browser';
import './main.css';
import angular from 'angular';

const app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.name = 'world';
  $scope.text = 'Moo';
  $scope.type = 'flaming-sheep';

  $scope.say = function (text, type) {
    $scope.cow = cow.say({
      text : text,
      e : 'o0',
      T : 'U ',
      f : type
    });
  };

  $scope.think = function (text, type) {
    $scope.cow = cow.think({
      text : text,
      e : 'o0',
      T : 'U ',
      f : type
    });
  };

  $scope.list = function () {
    cow.list(function(err, cows){
      console.log(cows);
    });
  };

});
