import { api } from './partials/api'
import { timeNow } from './partials/time'

import './style/main.scss'

const importAll = (r) => r.keys().map(r)
importAll(require.context('./static/', false, /\.(png|jpe?g|svg)$/))

window.addEventListener('load', () => {
  api()
  timeNow()
})
