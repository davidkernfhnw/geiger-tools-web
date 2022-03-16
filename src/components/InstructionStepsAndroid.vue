<template>
  <b-tab>
    <template slot="title">
      <mdicon name="android" class="mx-1" />
      <h6>Android</h6>
    </template>
    <hr>
    <div class="circle mx-auto my-4">1</div>
     <body class="mx-auto my-3 text-center bg-body" >
      Click the download button.
      <b-button
      
      class="mx-auto my-3 shadow android-btn"
      v-bind:href="download_url"
      target="_blank"
      >      <mdicon name="android" class="mx-1" />
 {{ name }}</b-button
    >
    </body>
    
    <body class="mx-auto mt-3 text-center bg-body" >
      Click <b>"Download anyway"</b>
          <b-img src="@/assets/android_instructions/warning-harmfull.jpg" fluid class="img-size mx-auto"></b-img>

    </body>
    <p class="ml-3 mr-3 mt-3 text-warning"><small>
      A warning may appear in your browser that this file could be harmful. 
      This message appears because you download the app file directly from this website instead from the Google Play Store. <br><b class="text-secondary">Don't worry, we won't install any malicious files on your device!</b>
    </small></p>
    <hr />

    <div class="circle mx-auto my-4">2</div>
      <body class="mx-auto mt-3 text-center bg-body" >
      After download has finished click <b>"Open"</b>  
      <b-img src="@/assets/android_instructions/open-snackbar.jpg" fluid class="img-size mx-auto"></b-img>
    </body>
    
      <body class="mx-auto mt-5 text-center bg-body" >
      If "...not allowed to install unknown apps.." is shown, click on <b>"Settings"</b>. Otherwise got to section <div class="circle-small ml-1">3</div>
      <b-img src="@/assets/android_instructions/not-allowed-snackbar.jpg" fluid class="img-size"></b-img>
    </body>

     <body class="mx-auto mt-5 text-center bg-body" >
      Toggle <b> "Allow apps from this source"</b> and return to the previous screen.
      <br>
      <b-img src="@/assets/android_instructions/allow-unknown-source.jpg" fluid class="img-size mx-auto"></b-img>
    </body>
    <hr />
    <div class="circle mx-auto my-3">3</div>
       <body class="mx-auto mt-3 text-center bg-body" >
      Click <b>"Install"</b>
      <br>
      <b-img src="@/assets/android_instructions/install-snackbar.jpg" fluid class="img-size mx-auto"></b-img>
    </body>
    <b-img src="@/assets/applause.png" width="100px" class="mt-3"></b-img>
    <h5 class="text-center mt-3">Successfully installed!</h5>
    <body></body>
  </b-tab>
</template>

<script>
export default {
  name: "InstructionStepsAndroid",
  components: {},
  props: {
    download_url: String,
    name: String,
  },

  data: () => ({}),
};
</script>

<style scoped>
.circle {
  border: 2px solid #3cd881;
  color: #3cd881;
}
.android-btn {
  background-color: #3cd881; 
  border: none; 
}


</style>