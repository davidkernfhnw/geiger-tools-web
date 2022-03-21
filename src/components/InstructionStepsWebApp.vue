<template>
  <b-tab>
    <template slot="title">
      <mdicon name="web" class="mx-1" />
      <h6>Web App</h6>
    </template>
    <hr />
    <div class="circle mx-auto my-4">1</div>
    <body class="mx-auto my-3 py-4 text-center bg-body">
      Click the button below to open the Web App. <br />
      <b-button
        class="mx-auto mt-3 web-btn"
        v-bind:href="download_url"
        target="_blank"
      >
        <mdicon name="web" class="mx-1" /> <b>{{ name }}</b></b-button
      >
       <p class="ml-3 mr-3 mt-3 text-info">
         <br>
       Best experience with <b-button variant="outline-dark" href="https://www.google.com/chrome/"  target="_blank"> <mdicon name="google-chrome"/> Chrome Browser</b-button>
    </p>
    </body>
  </b-tab>
</template>

<script>
export default {
  name: "InstructionStepsWebApp",
  components: {},
  props: {
    download_url: String,
    name: String,
  },

  data: () => ({}),
};
</script>

<style scoped>
.web-btn {
  background-color: #7778ac;
  border: none;
}
.img-size {
  margin-top: 20px;
  max-width: 280px;
  border-radius: 20px;
}
.bg-body {
  background-color: #f3f3f36b;
  border-radius: 10px;
  padding: 10px 20px;
  width: 90%;
}
.circle {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 10px;
  border: 2px solid #7778ac;
  color: #7778ac;
  text-align: center;
  font: 30px Arial, sans-serif;
}
.circle-small {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 5px;
  border: 2px solid #7778ac;
  color: #7778ac;
  text-align: center;
  font: 15px Arial, sans-serif;
  display: inline-block;
}
</style>