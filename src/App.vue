<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand :to="`/${$i18n.locale}/`">
              <img src="@/assets/logo-custom.png" alt="GEIGER Logo" height="50px">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <b-nav-item-dropdown text="Tools" right>
          <b-dropdown-item :to="`/${$i18n.locale}/android/toolbox`">{{ $t('appbar.toolboxForAndroid') }}</b-dropdown-item>
          <b-dropdown-item :to="`/${$i18n.locale}/windows/toolbox`">{{ $t('appbar.toolboxForWindows') }}</b-dropdown-item>
          <!-- <b-dropdown-item to="/android/chatbot">Chatbot for Android</b-dropdown-item> -->
          <b-dropdown-item :to="`/${$i18n.locale}/android/ksp-security`">{{ $t('appbar.kspSecurityForAndroid') }}</b-dropdown-item>
          <b-dropdown-item :to="`/${$i18n.locale}/android/cyberrange`">{{ $t('appbar.cyberrangeForAndroid') }}</b-dropdown-item>
          <b-dropdown-item :to="`/${$i18n.locale}/windows/cyberrange`">{{ $t('appbar.cyberrangeForWindows') }}</b-dropdown-item>
<!--      <b-dropdown-item to="/android/testvirus">Test Virus for Android</b-dropdown-item> -->     
          <b-dropdown-item :to="`/${$i18n.locale}/web/csmg`">{{ $t('appbar.csmgForWeb') }}p</b-dropdown-item>
        </b-nav-item-dropdown>
<!--         <b-nav-item :to="`/${$i18n.locale}/instructions`">{{ $t('appbar.howToUse') }}</b-nav-item>
 -->       <!-- <b-nav-item to="/help">Get Help</b-nav-item>  -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
  
       <!-- <b-navbar-nav class="ml-auto">
         <div class="pr-2">{{ $t('appbar.language') }}

         </div>
       <template>
        <div class="locale-changer">
          <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
            {{ lang }}
            </option>
          </select>
        </div>
      </template>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>

    <!--     <b-navbar variant="light">
      <b-navbar-brand class="">
        <img src="@/assets/logo-custom.png" alt="GEIGER Logo" height="50px">
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item></b-nav-item>
      <b-nav-item to="/instructions">Demonstration Videos</b-nav-item>
      <b-nav-item to="/help">Get Help</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
         <nav>
     <router-link to="/">Tools</router-link> |
      <router-link to="/windows/cyberrange"> Cyberrange </router-link> |
      <router-link to="/web/csmg"> CSMG Online </router-link> |
      <router-link to="/android/toolbox"> GEIGER Toolbox </router-link>
                <router-link to="/instructions">Demonstration Videos</router-link> |
                <router-link to="/help">Get Help</router-link> 


    </nav> -->
    <router-view />
    <BottomFooter />
  </div>
</template>

<script>
import BottomFooter from "@/components/BottomFooter.vue";

export default {
  components: {
    BottomFooter,
  },
  data: () => ({
    langs: ['en', 'de', 'ne', 'ro'],
    methods: {

      switchLocale(locale){
        if(this.$root.$i18n.locale != locale){
          this.$root.$i18n.locale = locale
          console.log(this.$root.$i18n.locale);
        }

      }
    },
  })
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Nunito:italic,regular,bold");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background: white;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
@media (min-width: 992px){
.navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute;
    left: 0;
    width: 20em;
}
}

nav a.router-link-exact-active {
  color: #42b983;
}
.color_android {
  color: #3cd881;
}
.color_apple {
  color: #231e20;
}
.color_microsoft {
  color: #01abeb;
}
.color_linux {
  color: #f2770c;
}
.color_geiger {
  color: #1fcd54;
}
.color_web_app {
  color: #7778ac;
}
body {
  font-weight: 500 !important;
  font-size: 1.1rem !important;
  font-family: "Nunito", sans-serif;
}
</style>
