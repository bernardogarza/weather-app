import { api } from './partials/api'
import { timeNow } from './partials/time'
import { timeStyle } from './partials/time-style';

import './style/main.scss';

const searchButton = document.querySelector('.submit-city');
const formInput = document.querySelector('#city');

let importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('./static/', false, /\.(png|jpe?g|svg)$/));


window.addEventListener('load', ()=> {
    timeNow();
    timeStyle();
});

searchButton.addEventListener('click', () =>{
    api();
});

formInput.addEventListener('keypress', e =>{
    let key = e.charCode || e.keyCode;
    if (key == '13'){
        api();
        e.preventDefault();
    }
});
