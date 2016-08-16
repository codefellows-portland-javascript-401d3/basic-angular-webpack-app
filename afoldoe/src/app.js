import greeting from './greeting';
import '../css/main.css';
import angular from 'angular';

const app = angular.module('myApp', []);

app.controller('main', function($scope) {
  $scope.greeting = greeting();
});

