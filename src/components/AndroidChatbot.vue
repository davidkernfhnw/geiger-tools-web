<template>
  <div class="android-chatbot">
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
      Click the download button below. <br />
      <b-button
        class="mx-auto mt-3 android-btn"
        v-bind:href="download_url"
        target="_blank"
      >
        <mdicon name="android" class="mx-1" /> <b>{{ name }}</b></b-button
      >
    </body>

    <body class="mx-auto mt-3 py-4 text-center bg-body">
      Click on <b>"Download anyway"</b> <br>
      <b-img
        src="@/assets/android_instructions/warning-harmfull.jpg"
        fluid
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <p class="ml-3 mr-3 mt-3 text-warning">
      <small>
        A warning may appear in your browser that this file could be harmful.
        This message appears because you download the app file directly from
        this website instead from the Google Play Store. <br /><b
          class="text-secondary"
          >Don't worry, we won't install any malicious files on your device!</b
        >
      </small>
    </p>
    <hr />

    <div class="circle mx-auto my-4">2</div>
    <body class="mx-auto mt-3 py-4 text-center bg-body">
      After download has finished click <b>"Open"</b> <br>
      <b-img
        src="@/assets/android_instructions/open-snackbar.jpg"
        fluid
        class="img-size mx-auto shadow"
      ></b-img>
    </body>

    <body class="mx-auto mt-5 py-4 text-center bg-body">
      If "...not allowed to install unknown apps.." is shown, click on
      <b>"Settings"</b>. Otherwise got to section
      <div class="circle-small ml-1">3</div> <br>
      <b-img
        src="@/assets/android_instructions/not-allowed-snackbar.jpg"
        fluid
        class="img-size mx-auto shadow"
      ></b-img>
    </body>

    <body class="mx-auto mt-5 py-4 text-center bg-body">
      Toggle <b> "Allow apps from this source"</b> and return to the previous
      screen. <br>
      <b-img
        src="@/assets/android_instructions/allow-unknown-source.jpg"
        fluid
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <hr />
    <div class="circle mx-auto my-3">3</div>
    <body class="mx-auto mt-3 py-4 text-center bg-body">
      Click <b>"Install"</b>
      <br />
      <b-img
        src="@/assets/android_instructions/install-snackbar.jpg"
        fluid
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <b-img src="@/assets/applause.png" width="100px" class="mt-3"></b-img>
    <h5 class="text-center mt-3">Successfully installed!</h5>
  </div>
</template>

<script>
export default {
  name: "AndroidChatbot",
  components: {},

  data: () => ({
        name: "Chatbot",
        desc: "",
        logo: "default-logo.png",
        download_url:
          "https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/android/chatbot.apk",

  }
  ),
};
</script>

<style scoped>
.android-btn {
  background-color: #3cd881;
  border: none;
}
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