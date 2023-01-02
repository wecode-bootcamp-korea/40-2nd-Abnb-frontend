export const getDateFormat = _date => {
  const date = new Date(_date);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};
