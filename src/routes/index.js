import { createApp } from "vue"
import { createRouter,createWebHistory } from "vue-router"
import AppHome from "../views/appHome.vue"


const routes = [
  {
    path:"/",
    component : AppHome
  }
]


const router = createRouter({
  history : createWebHistory(),
  routes
})

export default router;