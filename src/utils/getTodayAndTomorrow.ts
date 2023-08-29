export const getTodayAndTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const currentArray = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
  const tomorrowArray = [tomorrow.getFullYear(), tomorrow.getMonth() + 1, tomorrow.getDate()];

  return [currentArray, tomorrowArray];
};
