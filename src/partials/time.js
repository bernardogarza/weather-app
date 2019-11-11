/* eslint-disable import/prefer-default-export */
const timeNow = () => {
  const time = new Date();
  document.getElementById('local-time').innerHTML = time.toLocaleTimeString();
};
setInterval(timeNow, 1000);

export { timeNow };
