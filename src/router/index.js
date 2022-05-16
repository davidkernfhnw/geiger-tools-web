import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GetHelpView from '../views/GetHelpView.vue'
import InstructionsView from '../views/InstructionsView.vue'
//import WindowsCyberrange from '../components/WindowsCyberrange.vue'
import WebCSMG from '../components/WebCSMG.vue'
import AndroidToolbox from '../components/AndroidToolbox.vue'
import AndroidKSPSecurity from '../components/AndroidKSPSecurity.vue'
//import AndroidKSPSecurityAPK from '../components/AndroidKSPSecurityAPK.vue'
//import AndroidChatbot from '../components/AndroidChatbot.vue'
import AndroidCyberrange from '../components/AndroidCyberrange.vue'
import WindowsCyberrange from '../components/WindowsCyberrange.vue'
//import AndroidKSPTestVirus from '../components/AndroidKSPTestVirus.vue'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: `/${i18n.locale}` 
  },
  {
    path: '/android/ksp-security',
    redirect: `/${i18n.locale}/android/ksp-security` 
  },
  {
    path: 'android/toolbox',
    redirect: `/${i18n.locale}/android/toolbox` 
  },
  {
    path: 'android/cyberrange',
    redirect: `/${i18n.locale}/android/cyberrange` 
  },
  {
    path: 'windows/cyberrange',
    redirect: `/${i18n.locale}/windows/cyberrange` 
  },
  
{
    path: '/:lang',
    component: {
      render(c) {
        return c('router-view')
      },
    },
    children: [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: 'help',
    name: 'gethelp',
    component: GetHelpView
  },
  {
    path: 'instructions',
    name: 'instructions',
    component: InstructionsView
  },
  /* {
   path: '/windows/cyberrange',
   name: 'cyberrange',
   component: WindowsCyberrange
 }, */
  {
    path: 'web/csmg',
    name: 'CSMG Online',
    component: WebCSMG
  },
  {
    path: 'android/toolbox',
    name: 'GEIGER Toolbox',
    component: AndroidToolbox
  },
  /* {
    path: 'android/ksp-security',
    name: 'KSP Security',
    component: AndroidKSPSecurityAPK
  }, */
  {
    path: 'android/ksp-security',
    name: 'KSP Security',
    component: AndroidKSPSecurity
  },
  /* {
    path: 'android/chatbot',
    name: 'Chatbot',
    component: AndroidChatbot
  }, */
  {
    path: 'android/cyberrange',
    name: 'Cyberrange',
    component: AndroidCyberrange
  }, 
  {
    path: 'windows/cyberrange',
    name: 'Win_Cyberrange',
    component: WindowsCyberrange
  },
  /* {
    path: 'android/testvirus',
    name: 'TestVirus',
    component: AndroidKSPTestVirus
  }, */
    ]
}
]

const router = new VueRouter({
  //base: 'alpha-testing',
  base: 'geiger-tools-web',
  mode: 'history',
  routes
})

export default router
