<template>
  <div class="windows">
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
        class="mx-auto mt-3 win-btn"
        v-bind:href="download_url"
        target="_blank"
        size="lg"
      >
        <mdicon name="microsoft" class="mx-1" />
        <b> {{ name }} for Windows</b></b-button
      >
    </body>
    <hr />
    <div class="circle mx-auto my-4">2</div>
    <body class="mx-auto mt-3 py-4 text-center bg-body">
      Open the file after the download has finished. <br />
      <b-img
        src="@/assets/microsoft_instructions/download-snackbar.jpg"
        fluid-grow
        style="max-width: 250px"
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <body class="mx-auto mt-3 py-4 text-center bg-body">
      Click on <b>"More info"</b> <br />
      <b-img
        src="@/assets/microsoft_instructions/warning-protect.jpg"
        fluid-grow
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <p class="mt-1 text-warning" style="margin-left: 25px; margin-right: 25px">
      <small>
        This warning appears because you download the app file directly from
        this website instead from the the official Microsoft Store. <br /><b
          class="text-secondary"
          >Don't worry, we won't install any malicious files on your device!</b
        >
      </small>
    </p>
    <body class="mx-auto mt-5 py-4 text-center bg-body">
      Click on <b>"Run anyway"</b> <br />
      <b-img
        src="@/assets/microsoft_instructions/run-anyway.jpg"
        fluid-grow
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <hr />

    <div class="circle mx-auto my-4">3</div>
    <body class="mx-auto mt-3 py-4 text-center bg-body">
      Select Destination Location (default location is fine) and click
      <b>"Next"</b> <br />
      <b-img
        src="@/assets/microsoft_instructions/set-destination.jpg"
        fluid-grow
        class="img-size mx-auto shadow"
      ></b-img>
    </body>

    <body class="mx-auto mt-5 py-4 text-center bg-body">
      Create a desktop shortcut if you want and click on <b>"Next"</b>.

      <br />
      <b-img
        src="@/assets/microsoft_instructions/additional-tasks.jpg"
        fluid-grow
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <hr />
    <div class="circle mx-auto my-3">3</div>
    <body class="mx-auto mt-5 py-4 text-center bg-body">
      Click on <b> "Install"</b><br />
      <b-img
        src="@/assets/microsoft_instructions/install-app.jpg"
        fluid-grow
        class="img-size mx-auto shadow"
      ></b-img>
    </body>
    <b-img src="@/assets/applause.png" width="100px" class="mt-3"></b-img>
    <h5 class="text-center mt-3">Successfully installed!</h5>
  </div>
</template>

<script>
export default {
  name: "WindowsCyberrange",

  data: () => ({
    name: "Cyberrange",
    desc: "",
    logo: "montimage-logo.png",
    download_url:
      "https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/microsoft/mi_cyberrange.exe",
  }),
};
</script>

<style scoped>
.win-btn {
  background-color: #01abeb;
  border: none;
}
.img-size {
  margin-top: 20px;
  max-width: 400px;
  min-width: 120px;
  border-radius: 2px;
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
  border: 2px solid #01abeb;
  color: #01abeb;
  text-align: center;
  font: 30px Arial, sans-serif;
}
.circle-small {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 2px solid #01abeb;
  color: #01abeb;
  text-align: center;
  font: 15px Arial, sans-serif;
  display: inline-block;
}
</style>