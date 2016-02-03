export default function() {
  return (salary) => {
    if (!salary) {
      return;
    }

    let range;
    if (salary.from && salary.to) {
      range = salary.from + ' - ' + salary.to;
    } else if (salary.from) {
      range = 'from ' + salary.from;
    } else {
      range = 'up to ' + salary.to;
    }

    return range + ' ' + salary.currency;
  };
};
