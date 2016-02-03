import 'angular';

import './searchBox';
import './vacancies';

import config from './config';

var app = angular.module('app', ['searchBox', 'vacancies']);
app.controller('AppController', ['$scope', ($scope) => {
  $scope.searchText = config.searchText;
}]);
