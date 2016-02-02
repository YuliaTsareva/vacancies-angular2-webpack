export default function($scope, vacancyService) {
  const regionId = 1; // Moscow

  $scope.vacancies = [];

  updateVacancies();

  function updateVacancies() {
    vacancyService.getVacanciesAsync($scope.searchText, regionId).then((vacancies) => {
      $scope.vacancies = vacancies;
    });
  }

  $scope.$watch('searchText', (newValue, oldValue) => {
    if (newValue !== oldValue) {
      updateVacancies();
    }
  });
};
