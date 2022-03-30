import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetHelpView from '../views/GetHelpView.vue'
import InstructionsView from '../views/InstructionsView.vue'
import WindowsCyberrange from '../components/WindowsCyberrange.vue'
import WebCSMG from '../components/WebCSMG.vue'
import AndroidToolbox from '../components/AndroidToolbox.vue'
import AndroidKSPSecurity from '../components/AndroidKSPSecurity.vue'
import AndroidChatbot from '../components/AndroidChatbot.vue'

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
  },
  {
    path: '/windows/cyberrange',
    name: 'cyberrange',
    component: WindowsCyberrange
  },
  {
    path: '/web/csmg',
    name: 'CSMG Online',
    component: WebCSMG
  },
  {
    path: '/android/toolbox',
    name: 'GEIGER Toolbox',
    component: AndroidToolbox
  },
  {
    path: '/android/ksp-security',
    name: 'KSP Security',
    component: AndroidKSPSecurity
  },
  {
    path: '/android/chatbot',
    name: 'Chatbot',
    component: AndroidChatbot
  },
]

const router = new VueRouter({
  //base: 'alpha-testing',
  base: 'geiger-tools-web',
  mode: 'history',
  routes
})

export default router
