<template>
  <div id="app">
    <b-navbar variant="faded" type="ligth">
      <b-navbar-brand class=" my-3">
        <img src="@/assets/logo-custom.png" alt="GEIGER Logo" height="100px">
      </b-navbar-brand>
    </b-navbar>
    <nav>
   <!--    <router-link to="/">Tools</router-link> |
      <router-link to="/windows/cyberrange"> Cyberrange </router-link> |
      <router-link to="/web/csmg"> CSMG Online </router-link> |
      <router-link to="/android/toolbox"> GEIGER Toolbox </router-link> -->
                <router-link to="/instructions">Demonstration Videos</router-link> |
                <router-link to="/help">Get Help</router-link> 


    </nav>
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
