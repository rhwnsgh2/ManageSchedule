export const calcWork = (year, month, day) => {
  const schedule = {
    startDate: '2021-07-07',
    work: ['BRK', 'BRK', 'DAY', 'DAY', 'MID', 'MID', 'SWI', 'SWI'],
  };

  const startDate = stringToDate(schedule.startDate);
  const thisDate = paramToDate(year, month, day);

  const count = (thisDate - startDate) / 86400000;
  let arrayIndex = Number(count % schedule.work.length);
  arrayIndex >= 0
    ? arrayIndex
    : (arrayIndex = arrayIndex + schedule.work.length);
  return schedule.work[arrayIndex];
};

const paramToDate = (sYear, sMonth, sDate) => {
  return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};

const stringToDate = date_str => {
  let yyyyMMdd = String(date_str);
  let sYear = yyyyMMdd.substring(0, 4);
  let sMonth = yyyyMMdd.substring(5, 7);
  let sDate = yyyyMMdd.substring(8, 10);

  return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};

export default calcWork;
