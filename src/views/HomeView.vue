<template>
  <div class="home">
    <b-container fluid="sm">
      <b-img
        class="mt-3 mb-5"
        alt="Geiger-logo"
        src="@/assets/logo-custom.png"
        fluid
        width="300rem"
        style="padding-top: 20px"
      ></b-img>

<b-row class="m-4">
      <b-card
      v-for="tool in tools"
      :key="tool"
      border-variant="light"
      style="width: 300px; height: 340px"
      class="m-3 p-3 shadow"
  >
  <img :src="require('@/assets/logos/' + tool.logo + '')" :alt="tool.logo" width="150px" >


  <b-card-title class="mt-2">
    {{tool.name}}
  </b-card-title>
   

    <b-button :to="`/${$i18n.locale}` + tool.url" variant="primary" class="" style="position:absolute;  bottom: 20px; left: 20px; right: 20px"><b>Get Tool</b></b-button>
  </b-card>
  </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
//import InstructionStepsAndroid from "@/components/InstructionStepsAndroid.vue";
//import InstructionStepsWindows from "@/components/WindowsCyberrange.vue";
//import InstructionStepsWebApp from "@/components/WebApp.vue"
export default {
  name: "HomeView",
  components: {
    //InstructionStepsAndroid,
    //InstructionStepsWindows,
   // InstructionStepsWebApp,
  },
  data: () => ({
    tools: [
      {name: "GEIGER Toolbox for Android",  url: "/android/toolbox",      logo:"toolbox-logo.png"},
      //{name: "Chatbot for Android",         url: "/android/chatbot",      logo:"default-logo.png"},
      //{name: "KSP Security for Android",    url: "/android/ksp-security", logo:"montimage-logo-rect.png"},
      {name: "KSP Security for Android",    url: "/android/ksp-security", logo:"ksp-security-logo.webp"},
      {name: "Cyberrange for Android",      url: "/android/cyberrange",   logo:"montimage-logo-rect.png"},
      {name: "CSMG Online Web App",         url: "/web/csmg",             logo:"csmg-logo.png"},
     // {name: "Test Virus for Android",    url: "/android/testvirus",    logo:"test-virus-logo.webp"}


    ]
  }),
  methods: {},
};
</script>

<style scoped>
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
  background-color: rgb(255, 255, 255);
}
.collapse {
  background-color: white;
}
</style>