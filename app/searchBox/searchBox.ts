export default function() {
  return {
    restrict: 'E',
    templateUrl: require('./searchBox.html'),
    scope: {
      text: '='
    }
  };
};
