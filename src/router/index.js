import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetHelpView from '../views/GetHelpView.vue'
import InstructionsView from '../views/InstructionsView.vue'


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
  },
  {
    path: '/instructions',
    name: 'instructions',
    component: InstructionsView
  }
]

const router = new VueRouter({
  base: 'alpha-testing',
  mode: 'history',
  routes
})

export default router
