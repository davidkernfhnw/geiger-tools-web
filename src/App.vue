<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  background-color: #F8F8F8;
}
:root{
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
.circle {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 10px;
  border: 2px solid black;
  color: black;
  text-align: center;
  font: 30px Arial, sans-serif;
}
body {
  font-weight: 500 !important;
  font-size: 1.1rem !important;
}
.img-size {
  margin-top: 20px;
  max-width: 280px;
  border-radius: 20px;
}
.bg-body {
  background-color: #f3f3f3;
  border-radius: 20px;
  padding: 10px 20px;
  width: 90%;
}
.circle-small {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 2px solid #3cd881;
  color: #3cd881;
  text-align: center;
  font: 15px Arial, sans-serif;
  display: inline-block;
}

</style>
