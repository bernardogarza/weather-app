/* eslint-disable import/prefer-default-export */
const timeObj = new Date();
const hour = timeObj.getHours();
const container = document.querySelector('.day');

const timeStyle = () => {
  if (hour > 18) {
    container.classList.remove('day');
    container.classList.add('night');
  }
};

export { timeStyle };
