import './style.css'
import { App } from './app'

let app = new App()
document.querySelector('body').innerHTML = app.render()
app.run();
