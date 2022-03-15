<template>
  <div class="home">
    <b-container fluid="sm">
      <b-img
        class="mb-4"
        alt="Geiger-logo"
        src="../assets/logo.png"
        fluid
        width="400rem"
      ></b-img>
 
      <b-card
        v-for="(n, i) in tools.length"
        :key="i"
        class="mb-3 mx-auto br5"
        style="max-width: 700px"
      >
        <b-row align-h="start" class="m-1">
          <b-col cols="3" class="px-0">
            <b-img src="@/assets/tool-example.png" fluid class="br5"></b-img>
          </b-col>
          <b-col cols="9" align-self="center" class="px-0">
            <b-card-title class="mb-0">
              {{ tools[i].name }}
              <mdicon v-if="tools[i].android" name="android" class="mx-1" />
              <mdicon v-if="tools[i].microsoft" name="microsoft" class="mx-1" />
              <mdicon v-if="tools[i].apple" name="apple" class="mx-1" />
              <mdicon v-if="tools[i].linux" name="linux" class="mx-1" />
            </b-card-title>
          </b-col>
        </b-row>
        <b-button
          block
          v-bind:hidden="!tools[i].btnShow"
          variant="primary"
          class="border-radius-bottom"
          v-b-toggle="'collapse-' + i"
          @click="tools[i].btnShow = !tools[i].btnShow"
          >Get Tool</b-button
        >
        <b-collapse :id="'collapse-' + i" fluid class="mt-2">
          <b-tabs align="center">
            <InstructionStepsAndroid
              v-if="tools[i].android"
              :name="tools[i].name"
              :download_link="tools[i].download_url_android"
              
            />
            <InstructionStepsWindows
              v-if="tools[i].microsoft"
              :download_link="tools[i].download_url_windows"
            />
          </b-tabs>
          <b-button 
          block 
          variant="primary"
          class="border-radius-bottom"
          v-b-toggle="'collapse-' + i"
          @click="tools[i].btnShow = !tools[i].btnShow"
          >Close</b-button>
        </b-collapse>
      </b-card>
      
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import InstructionStepsAndroid from "@/components/InstructionStepsAndroid.vue";
import InstructionStepsWindows from "@/components/InstructionStepsMicrosoft.vue";

export default {
  name: "HomeView",
  components: {
    InstructionStepsAndroid,
    InstructionStepsWindows,
  },
  data: () => ({
    tools: [
      {
        btnShow: true,
        name: "GEIGER Toolbox",
        desc: "",
        img: "",
        android: true,
        download_url_android:
          "https://davidkernfhnw.github.io/geiger-tools-web/raw/downloads/android/GEIGER-Toolbox.apk",
        microsoft: false,
        download_url_microsoft: "",
        apple: false,
        download_url_apple: "",
        linux: false,
        download_url_linux: "",
      },

      {
        btnShow: true,
        name: "MI Cyberrange",
        desc: "",
        img: "",
        android: true,
        download_url_android:
          "https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/android/mi-cyberrange.apk",
        microsoft: true,
        download_url_microsoft:
          "https://davidkernfhnw.github.io/geiger-tools-web/raw/downloads/microsoft/mi_cyberrange.exe",
        apple: false,
        download_url_apple: "",
        linux: false,
        download_url_linux: "",
      },

      {
        btnShow: true,
        name: "Chatbot",
        desc: "",
        img: "",
        android: true,
        download_url_android:
          "https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/android/chatbot-0.7.2.apk.apk",
        microsoft: false,
        download_url_microsoft: "",
        apple: false,
        download_url_apple: "",
        linux: false,
        download_url_linux: "",
      },
    ],
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

</style>