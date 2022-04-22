import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import mdiVue from 'mdi-vue/v2'
import * as mdijs from '@mdi/js'


Vue.use(mdiVue, {
  icons: mdijs
})

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from './i18n'

Vue.config.productionTip = false

// use language from the routing param or default language
router.beforeEach((to, from, next) => {
  let language = to.params.lang;
  if(!language){
    language = 'en'
  }
  //set teh current language for i18n
  i18n.locale = language
  next()
})

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
