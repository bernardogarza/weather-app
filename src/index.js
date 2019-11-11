import { api } from './partials/api'
import { time } from './partials/time'
import { timeStyle } from './partials/time-style';

import './style/main.scss';

let importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('./static/', false, /\.(png|jpe?g|svg)$/));


window.addEventListener('load', ()=> {
    api();
    time();
    timeStyle()
});




