export const convertDate = (date: string) => {
  const dateUnit = ['년', '월', '일'];
  const dateArray = date.slice(0, 10).split('-');

  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i][0] === '0') {
      dateArray[i] = dateArray[i][1];
    }
    dateArray[i] += dateUnit[i];
  }

  return dateArray.join(' ');
};
