import { api } from './partials/api'

import './style/main.scss';

let importAll = (r) => {
    return r.keys().map(r);
}
const images = importAll(require.context('./static/', false, /\.(png|jpe?g|svg)$/));


window.addEventListener('load', ()=> {
    api();
});


