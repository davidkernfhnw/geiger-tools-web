<template>
  <div id="app">
    <nav>
      <router-link to="/">Tools</router-link> |
      <router-link to="/instructions">Insructions</router-link> |
      <router-link to="/help">Get Help</router-link> 
    </nav>
    <router-view />
    <BottomFooter />
  </div>

</template>

<script>
import BottomFooter from '@/components/BottomFooter.vue'

export default {
  components: {
    BottomFooter
  }
}
</script>


<style> 
@import url("https://fonts.googleapis.com/css?family=Nunito:italic,regular,bold");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  background-color: #F8F8F8;
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
color:  #3CD881;
}
.color_apple {
color: #231E20;
}
.color_microsoft {
color: #01ABEB;
}
.color_linux {
  color: #F2770C;
}
.color_geiger {
  color: #1FCD54;
}
body {
  font-weight: 500 !important;
  font-size: 1.1rem !important;
  font-family: 'Nunito', sans-serif;
}


</style>
