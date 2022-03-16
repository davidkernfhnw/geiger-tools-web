import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetHelpView from '../views/GetHelpView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/help',
    name: 'gethelp',
    component: GetHelpView
  }
]

const router = new VueRouter({
  routes
})

export default router
