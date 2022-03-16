<template>
  <div class="home">
    <b-container fluid="sm">
      <b-img
        class="mb-4"
        alt="Geiger-logo"
        src="@/assets/logo-custom.png"
        fluid
        width="400rem"
      ></b-img>

      <b-card
        v-for="(n, i) in tools.length"
        :key="i"
        class="mb-3 mx-auto br5"
        style="max-width: 700px"
      >
        <b-row class="my-auto mx-3">
          <b-col cols="3" class="px-0 my-3">
            <b-img src="@/assets/tool-example.png" fluid class="br5"></b-img>
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
              v-if="tools[i].android"
              :name="tools[i].name"
              :download_url="tools[i].download_url_android"
            />
            <InstructionStepsWindows
              v-if="tools[i].microsoft"
              :name="tools[i].name"
              :download_url="tools[i].download_url_microsoft"
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
          "https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads/android/GEIGER-Toolbox.apk",
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
          "https://github.com/davidkernfhnw/geiger-tools-web/raw/master/downloads//microsoft/mi_cyberrange.exe",
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
.align-left {
  text-align: left;
}
.card-title {
  font-weight: 700;
  color: rgb(59, 63, 61);
}
.card {
  background-color: rgba(225, 252, 231, 0.274);
}
.collapse {
  background-color: white;
}
</style>