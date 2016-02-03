import appConfig from './../config';

export default function($http) {

  this.getVacanciesAsync = function(searchText, regionId) {

    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    const config = {
      params: {
        text: searchText,
        area: regionId,
        per_page: appConfig.vacanciesCount
      }
    };

    return $http.get(appConfig.apiUrl, config).then(onSuccess, onError);

    function onSuccess(response) {
      let vacancies = [];

      response.data.items.forEach((item) => {
        let vacancy: any = createVacancyFromDto(item);

        getKeySkillsAsync(item).then((keySkills) => {
          vacancy.keySkills = keySkills;
        });

        vacancies.push(vacancy);
      });

      return vacancies;
    }

    function createVacancyFromDto(dto) {
      const vacancy: any = {
        name: dto.name,
        company: dto.employer.name,
        companyLogo: dto.employer.logo_urls && dto.employer.logo_urls['90'],
        salary: dto.salary,
        url: dto.alternate_url
      };

      if (dto.address && dto.address.metro) {
        vacancy.location = {
          station: dto.address.metro.station_name,
          lineId: dto.address.metro.line_id
        };
      }

      return vacancy;
    }

    function getKeySkillsAsync(dto) {
      return $http.get(dto.url).then(
        (response) => {
          if (response.data.key_skills && response.data.key_skills.length > 0) {
            return response.data.key_skills;
          }
        },

        () => null
      );
    }

    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

    function onError(response) {
      console.log('Something went wrong:', response.status, response.statusText);
      return [];
    }
  };
};
