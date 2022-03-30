<template>
<div class="web-app">
 <b-row align-v="center" align-h="center">
      <img
        :src="require('@/assets/logos/' + logo + '')"
        alt="logo"
        height="100px"
        class="pr-3"
      />
      <h1>{{ name }}</h1>
    </b-row>
    <hr />
    <div class="circle mx-auto my-4">1</div>
    <body class="mx-auto my-3 py-4 text-center bg-body">
      Click the button below to open the Web App. <br />
      <b-button
        class="mx-auto mt-3 web-btn"
        v-bind:href="url_web"
        target="_blank"
        size="lg"
      >
        <mdicon name="web" class="mx-1" /> <b>{{ name }}</b></b-button
      >
      <br>
      <b-row align-v="center" align-h="center" class="mt-4">
      
      <small class="pr-2">
       Best experience with
       </small>
        <b-button variant="outline-dark" href="https://www.google.com/chrome/"  target="_blank" size="sm"> <mdicon name="google-chrome"/> Chrome</b-button>
    
      </b-row>
      
    </body>
</div>
</template>

<script>
export default {
  name: "InstructionStepsWebApp",
  components: {},
  

  data: () => ({
        name: "CSMG Online",
        desc: "",
        logo: "default-logo.png",
        url_web: "https://eu-online.csmg.awartex.com/admin",
      }),
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