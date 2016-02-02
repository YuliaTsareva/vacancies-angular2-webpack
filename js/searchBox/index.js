import 'angular';

import searchBox from './searchBox';

angular.module('searchBox', [])
  .directive('searchBox', searchBox);
