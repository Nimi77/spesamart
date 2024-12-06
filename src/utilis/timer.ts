export const calculateTimeLeft = (endTime: number) => {
  const currentTime = Date.now();
  const totalSeconds = Math.max(Math.floor((endTime - currentTime) / 1000), 0);

  const days = Math.floor(totalSeconds / (24 * 60 * 60));
  const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};
