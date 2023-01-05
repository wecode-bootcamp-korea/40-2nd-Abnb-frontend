export const getQueryMap = qs => {
  qs.substring(1)
    .split('&')
    .map(querySet => querySet.split('='))
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
};
