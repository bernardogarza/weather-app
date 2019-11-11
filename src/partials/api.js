/* eslint-disable import/prefer-default-export */
const kelvin = 273.15;
const iconImage = document.querySelector('.icon-image');
const city = document.querySelector('.city');
const degrees = document.querySelector('.degrees');
const minMax = document.querySelector('.min-max');
const weatherDescription = document.querySelector('#weather-description');
const changeTemp = document.querySelector('.change-temp');

const api = async () => {
  try {
    const cityName = document.querySelector('#city').value;
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=28bea7f0fe8b5caa0a43a8441d7eea63`)
      .then((response) => response.json())
      .then((data) => {
        const { temp, temp_max, temp_min } = data.main;
        degrees.innerHTML = `${Math.floor(temp - kelvin)}°C`;
        minMax.innerHTML = `Min: ${Math.floor(temp_min - kelvin)}°C<br>`;
        minMax.innerHTML += `Max: ${Math.floor(temp_max - kelvin)}°C`;
        weatherDescription.innerHTML = data.weather[0].description.toUpperCase();
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        iconImage.src = `static/${data.weather[0].icon}.png`;
        const farenheit = Math.floor(((temp - kelvin) * 9 / 5) + 32);
        changeTemp.innerText = '°C';
        changeTemp.addEventListener('click', (e) => {
          if (e.target.innerText === '°C') {
            changeTemp.innerHTML = '°F';
            degrees.innerHTML = `${farenheit}°F`;
            minMax.innerHTML = `Min: ${Math.floor(((temp_min - kelvin) * 9 / 5) + 32)}°F<br>`;
            minMax.innerHTML += `Max: ${Math.floor(((temp_max - kelvin) * 9 / 5) + 32)}°F`;
          } else if (e.target.innerText === '°F') {
            changeTemp.innerText = '°C';
            degrees.innerHTML = `${Math.floor(temp - kelvin)}°C`;
            minMax.innerHTML = `Min: ${Math.floor(temp_min - kelvin)}°C<br>`;
            minMax.innerHTML += `Max: ${Math.floor(temp_max - kelvin)}°C`;
          }
        });
      });
  } catch (error) {
    alert('Please enter a valid city');
  }
};

export { api };
