import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/index"
// import randomizer from "./randomizer/index"

createApp(App).use(router).mount('#app')
