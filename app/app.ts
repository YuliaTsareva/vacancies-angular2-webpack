// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';

// Zone.js
require('zone.js/dist/zone-microtask.min');

// RxJS
// In production manually include the operators you use
require('rxjs/add/operator/map');

//require('es7-reflect-metadata/src/global/browser');
require('reflect-metadata');

import 'angular';
import {UpgradeAdapter} from 'angular2/upgrade';

import './searchBox';
import './vacancies';

import config from './config';

angular.module('myApp', ['searchBox', 'vacancies'])
  .controller('AppController', ['$scope', ($scope) => {
    $scope.searchText = config.searchText;
  }]);

const adapter = new UpgradeAdapter();
adapter.bootstrap(document.body, ['myApp']);
