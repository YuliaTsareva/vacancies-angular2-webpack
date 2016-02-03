export default function() {
  return {
    restrict: 'E',
    templateUrl: require('./vacancies.html'),
    controller: 'vacancyController',
    scope: {
      searchText: '='
    }
  };
};
