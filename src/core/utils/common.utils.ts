export const convertSecondsToMinutes = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  if (minutes > 0) {
    return `${minutes} minutes, ${seconds} seconds`;
  }
  return `${seconds} seconds`;
};
