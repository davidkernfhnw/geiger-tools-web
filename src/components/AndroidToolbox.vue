<template>
<div class="web-app">
 <b-row align-v="center" align-h="center">
      <img
        :src="require('@/assets/logos/' + logo + '')"
        alt="logo"
        height="40px"
        class="pr-3"
      />
      <h1>{{ name }}</h1>
    </b-row>
    <hr />
    <div class="circle mx-auto my-4">1</div>
    <body class="mx-auto my-3 py-4 text-center bg-body">
      Download {{name}} from the Google Play Store <br />
      <b-button
        class="p-0 mt-3"
        v-bind:href="playstore_url"
        target="_blank"
        
      >
      <img
       :src="require('@/assets/google-play-btn.png')"
       height="50px"
      >
      </b-button>
    
      
    </body>
</div>
</template>

<script>
export default {
  name: "AndroidToolbox",
  components: {},
  

  data: () => ({
        name: "GEIGER Toolbox",
        desc: "",
        logo: "toolbox-logo.png",
        playstore_url: "https://play.google.com/store/apps/details?id=cybergeigertoolbox.geiger_toolbox",
      }),
};
</script>

<style scoped>

.img-size {
  margin-top: 20px;
  max-width: 280px;
  border-radius: 20px;
}
.bg-body {
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 10px 20px;
  width: 90%;
}
.circle {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 10px;
  border: 2px solid #3cd881;
  color: #3cd881;
  text-align: center;
  font: 30px Arial, sans-serif;
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