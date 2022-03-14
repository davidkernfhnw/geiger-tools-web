<template>
      <b-tab title="Android">
        <b-button :href="download_link" >Download APK</b-button>
      
      </b-tab>
 
 <!-- <v-container fluid class="d-flex justify-center">
    <div class="d-flex flex-column">
      <v-card class="d-flex flex-row mb-6 pa-4" flat color="white" tile>
        <div class="pr-8 d-flex align-center">
          <h1>1.</h1>
        </div>
        <div></div>
        <div class="d-flex align-center">
          <v-btn color="green" class="white--text" 
            >Download APK<v-icon class="ml-3">mdi-android</v-icon>
          </v-btn>
          <a href="https://docs.google.com/uc?export=download&id=1cXWbwONh7JROY2bqJH5O6ZD8NV3WdiGX" download="geiger" target="_blank">download</a>
 
        </div>
      </v-card>
      <v-divider class="my-5 divider"></v-divider>
      <v-card class="d-flex flex-row mb-6 pa-4" flat color="white" tile>
        <div class="pr-8 d-flex align-center">
          <h1>2.</h1>
        </div>
        <div class="d-flex align-center">
          <div class="d-flex flex-column">
            <v-list-item class="pa-0">
              <v-list-item-content>
                <v-list-item-title>
                  <body class="pa-0"><b>1.</b> Open the downloaded APK File</body>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="pa-0">
              <v-list-item-content>
                <v-list-item-title>
                  <body class="pa-0"><b>2.</b> Tap the <b>"Install"</b> Button to install the APK</body>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
      </v-card>
      <v-divider class="my-5 divider"></v-divider>
      <v-card class="d-flex flex-row mb-6 pa-4" flat color="white" tile>
        <div class="pr-4 d-flex align-center">
          <h1>3.</h1>
        </div>
        <div class="d-flex align-center">
          <div class="d-flex flex-column"></div>
          <body>
              If necessary: <b>Enable the "Unknown Sources"</b> setting on your Android device if needed.
          </body>
        </div>
      </v-card>
    </div>
  </v-container> -->
</template>

<script>
export default {
  name: "InstructionSteps",
  props: {
    download_link: String,
  },

  data: () => ({
  }),
};

</script>

<style>
.divider {
  width: 100vw;
}
</style>