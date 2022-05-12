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
    <div style="height: 80px"></div>
 <b-row align-v="center" align-h="center">
      <img
        :src="require('@/assets/logos/' + logo2 + '')"
        alt="logo"
        height="40px"
        class="pr-3"
      />
      <h1>{{ name2 }}</h1>
    </b-row>
    <hr />
    <div class="circle mx-auto my-4">1</div>
    <body class="mx-auto my-3 py-4 text-center bg-body">
      In order to test the malware detecting function of the Mobile Security Scanner Tool please Install the {{name2}} Application from the Google Play Store <br />
        <small  class="text-warning">
       Don't worry, we won't install any malicious files on your device! This is only a test virus and will not damage your device. After uninstalling the app, the test virus will be deleted too.
        
      </small>
      <br>
      <b-button
        class="p-0 mt-3"
        v-bind:href="playstore_url2"
        target="_blank"
        
      >
      <img
       :src="require('@/assets/google-play-btn.png')"
       height="50px"
      >
      </b-button>
    <p class="ml-3 mr-3 mt-3 text-warning">

    </p>
      
    </body>
</div>

</template>

<script>
export default {
  name: "InstructionStepsWebApp",
  components: {},
  

  data: () => ({
        name: "Mobile Security Scanner",
        desc: "",
        logo: "ksp-security-logo.webp",
        playstore_url: "https://play.google.com/store/apps/details?id=com.montimage.mi_ksp_security",
        
        name2: "Test Virus",
        desc2: "",
        logo2: "test-virus-logo.webp",
        playstore_url2: "https://play.google.com/store/apps/details?id=com.montimage.eicar_virus",
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