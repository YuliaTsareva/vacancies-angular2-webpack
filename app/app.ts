import 'angular';

import './searchBox';
import './vacancies';

import config from './config';

angular.module('app', ['searchBox', 'vacancies'])
  .controller('AppController', ['$scope', ($scope) => {
    $scope.searchText = config.searchText;
  }]);
