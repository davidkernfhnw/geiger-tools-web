<template>
      <b-tab title="Microsoft" class="my-3">
        <b-button :href="download_link" >Download</b-button>
      
      </b-tab>
</template>

<script>
export default {
  name: "InstructionStepsWindows",
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