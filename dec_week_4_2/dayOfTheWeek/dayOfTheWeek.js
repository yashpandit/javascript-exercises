const dayOfTheWeek = (day, month, year) => {
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return week[new Date(year + '-' + month + '-' + day).getDay()];
};

module.exports = dayOfTheWeek;
