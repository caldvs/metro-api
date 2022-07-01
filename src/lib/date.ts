export const getMonthFromString = (month) => {
  const d = Date.parse(`${month} 1, 2012`);
  if (!isNaN(d)) {
    return new Date(d).getMonth() + 1;
  }
  return -1;
};
