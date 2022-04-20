<template>
  <div class="home">
    <b-container fluid="sm">
      <b-img
        class="mt-3 mb-5"
        alt="Geiger-logo"
        src="@/assets/logo-custom.png"
        fluid
        width="300rem"
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
   

    <b-button :to="tool.url" variant="primary" class="" style="position:absolute;  bottom: 20px; left: 20px; right: 20px"><b>Get Tool</b></b-button>
  </b-card>
  </b-row>
      <!-- <b-card
        v-for="(n, i) in tools.length"
        :key="i"
        class="mb-3 mx-auto br5"
        style="max-width: 700px"
      >
        <b-row class="my-auto mx-3">
          <b-col cols="3" class="px-0 my-3">
            <b-img :src="require('@/assets/logos/' + tools[i].logo + '' )" fluid class="br5" ></b-img>
          </b-col>
          <b-col cols="9" class="align-left">
            <b-card-title class="my-3">
              {{ tools[i].name }}
              <hr class="p-0 my-2" />
              <div v-bind:hidden="!tools[i].btnShow">
                <mdicon
                  v-if="tools[i].android"
                  name="android"
                  class="mx-1 color_android"
                />
                <mdicon
                  v-if="tools[i].microsoft"
                  name="microsoft"
                  class="mx-1 color_microsoft"
                />
                <mdicon
                  v-if="tools[i].apple"
                  name="apple"
                  class="mx-1 color_apple"
                />
                <mdicon
                  v-if="tools[i].linux"
                  name="linux"
                  class="mx-1 color_linux"
                />
              </div>
            </b-card-title>
          </b-col>
        </b-row>
        <b-button
          block
          style="background-color: #1fcd54; border-color: #1fcd54"
          v-bind:hidden="!tools[i].btnShow"
          class="border-radius-bottom"
          v-b-toggle="'collapse-' + i"
          @click="tools[i].btnShow = !tools[i].btnShow"
          >Get Tool</b-button
        >
        <b-collapse :id="'collapse-' + i" fluid class="mt-2">
          <b-tabs align="center" pills class="pt-3">
              <InstructionStepsAndroid
              v-if="tools[i].android && !tools[i].web"
              :name="tools[i].name"
              :download_url="tools[i].download_url_android"
            />
           <InstructionStepsWindows
              v-if="tools[i].microsoft && !tools[i].web"
              :name="tools[i].name"
              :download_url="tools[i].download_url_microsoft"
            /> 
            <InstructionStepsWebApp 
              v-if="tools[i].web"
              :name="tools[i].name"
              :download_url="tools[i].url_web"
            />
          </b-tabs>
          <b-button
            block
            variant="secondary"
            class="border-radius-bottom"
            v-b-toggle="'collapse-' + i"
            @click="tools[i].btnShow = !tools[i].btnShow"
            >Close</b-button
          >
        </b-collapse>
      </b-card> -->
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
      {name: "CSMG Online Web App",         url: "/web/csmg",             logo:"default-logo.png"},
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