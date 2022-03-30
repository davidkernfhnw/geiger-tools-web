<template>
  <b-container class="gethelp">
    <h1>Help page</h1>
    <b-button class="back-btn" pill @click="$router.go(-1)">   <mdicon name="arrow-left"/> Go Back</b-button>
  </b-container>
</template>
<script>

export default {

}
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
</style>