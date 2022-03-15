<template>
  <b-tab title="Android">
    <b-list-group>
      <b-list-group-item>
        <div class="circle mx-auto mb-3">1</div>
        <b-button variant="success" class="mx-auto" :href="download_url" target="_blank">Download {{name}}</b-button>
      </b-list-group-item>
      <b-list-group-item>
        <hr>
        <div class="circle mx-auto mb-3">2</div>
        <h5 class="mx-auto mt-3"><b>2.1</b></h5>
        <body class="text-center">
          Open the downloaded APK File
        </body>
        <h5 class="mx-auto mt-3"><b>2.2</b></h5>
        <body class="text-center">
          Tap the <b>"Install"</b> Button to install the APK
        </body>
        <body class="text-center">
          <h5 class="mx-auto mt-3"><b>(2.3)</b></h5>
          If "Installation not allowed" is shown, tap on Settings and toggle
          "Allow from this source". Repeat the steps from <b>2.1.</b> 
        </body>
      </b-list-group-item>
      <b-list-group-item>
        <hr>
        <div class="circle mx-auto mb-3">3</div>
        <b-img src="@/assets/applause.png" width="100px"></b-img>
        <h5 class="text-center mt-3">
          Successfully installed!
        </h5>
        <body>
        </body>
      </b-list-group-item>
    </b-list-group>
  </b-tab>
</template>

<script>
export default {
  name: "InstructionStepsAndroid",
  props: {
    download_url: String,
    name: String
  },

  data: () => ({}),
};
</script>

<style>

.circle {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 10px;
  background: rgb(255, 255, 255);
  border: 2px solid rgb(45, 155, 51);
  color: rgb(45, 155, 51);
  text-align: center;
  font: 30px Arial, sans-serif;
}
</style>