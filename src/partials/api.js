let lon, lat;
let city = document.querySelector('.city');
let degrees = document.querySelector('.degrees');

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
                    console.log(data.main.temp);
                    console.log(data.name);
                    const {temp} = data.main
                    degrees.textContent = temp;
                    city.textContent = `${data.name}, ${data.sys.country}`
                })
        });
    }
}

export { api };