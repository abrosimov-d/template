import './style.css'
import { App } from './app'

let app = new App()
document.querySelector('#app').innerHTML = app.render()
app.run();
