<template>
    <b-container fluid="sm">
     
      <h3 class="align-left"> Demo <b>GEIGER Toolbox</b> and <b>MI Cyberrange</b>
        (Android<span><mdicon name="android"  class="mx-1 color_android"/></span>)</h3>
      <hr>
      <b-embed
      type="video"
      aspect="16by9"
      controls
      allowfullscreen
      >
      <source src="@/assets/videos/toolbox-and-cyberrange.mp4" type="video/mp4">
      </b-embed>

      <div style="margin-top: 80px"></div>

      <h3 class="align-left"> Demo <b>GEIGER Toolbox</b> and <b>Chatbot</b>
        (Android<span><mdicon name="android"  class="mx-1 color_android"/></span>)</h3>
      <hr>
      <b-embed
      type="video"
      aspect="16by9"
      controls
      allowfullscreen
      >
      <source src="@/assets/videos/toolbox-and-chatbot.mp4" type="video/mp4">
      </b-embed>
      <div style="margin-top: 80px"></div>
      <b-button class="back-btn" pill @click="$router.go(-1)">   <mdicon name="arrow-left"/> Go Back</b-button>

    </b-container>
</template>

<script>
// @ is an alias to /src
export default {
  name: "HomeView",
  components: {

  
  },
  data: () => ({
  }),
  methods: {},
};
</script>

<style scoped>
.back-btn {
  position: fixed;
  left: 20px;
  bottom: 20px;
  background-color: #1fcd54;
  border: none;
  z-index: 1000;
  
}
.card-body {
  padding: 0;
}
.br5 {
  border-radius: 5px;
}
.border-radius-bottom {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.list-group-item {
  border: 0;
}
.align-left {
  text-align: left;
}
.card-title {
  font-weight: 700;
  color: rgb(59, 63, 61);
}
.card {
  background-color: rgb(235, 235, 235);
}
.collapse {
  background-color: white;
}
</style>