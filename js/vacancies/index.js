import 'angular';
import 'angular-ui-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/styles.css';

import vacancies from './vacancies';
import vacancyController from './vacancyController';
import vacancyService from './vacancyService';
import salaryFilter from './salaryFilter';
import keySkillsFilter from './keySkillsFilter';

angular.module('vacancies', ['ui.bootstrap'])
  .directive('vacancies', vacancies)
  .controller('vacancyController', ['$scope', 'vacancyService', vacancyController])
  .service('vacancyService', ['$http', vacancyService])
  .filter('formatSalary', salaryFilter)
  .filter('formatKeySkills', keySkillsFilter);
