let lon, lat;
let kelvin = 273.15;
let iconImage = document.querySelector('.icon-image');
let city = document.querySelector('.city');
let degrees = document.querySelector('.degrees');
let minMax = document.querySelector('.min-max')
let weatherDescription = document.querySelector('#weather-description');
let changeTemp = document.querySelector('.change-temp');

let api = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            lon = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            fetch(`${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=880e755659808f9dab51f2452d91ea6a`)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temp, temp_max, temp_min} = data.main
                    degrees.innerHTML = `${Math.floor(temp - kelvin)}°C`;
                    minMax.innerHTML = `Min: ${Math.floor(temp_min-kelvin)}°C<br>`
                    minMax.innerHTML += `Max: ${Math.floor(temp_max-kelvin)}°C`
                    weatherDescription.innerHTML = data.weather[0].description
                    city.innerHTML = `${data.name}, ${data.sys.country}`
                    iconImage.src = `static/${data.weather[0].icon}.png`
                    const farenheit = Math.floor(((temp - kelvin) * 9/5) + 32);
                    changeTemp.innerText = 'C'
                    changeTemp.addEventListener('click', (e) => {
                        if(e.target.innerText === 'C'){
                            changeTemp.innerHTML = 'F';
                            degrees.innerHTML = `${farenheit}°F`;
                            minMax.innerHTML = `Min: ${Math.floor(((temp_min-kelvin) * 9/5) + 32)}°F<br>`
                            minMax.innerHTML += `Max: ${Math.floor(((temp_max-kelvin) * 9/5) + 32)}°F`        
                        } else if(e.target.innerText === 'F'){
                            changeTemp.innerText = 'C';
                            degrees.innerHTML = `${Math.floor(temp - kelvin)}°C`;
                            minMax.innerHTML = `Min: ${Math.floor(temp_min-kelvin)}°C<br>`
                            minMax.innerHTML += `Max: ${Math.floor(temp_max-kelvin)}°C`
                        }
                    });
                })
        });
    }
};


export { api };