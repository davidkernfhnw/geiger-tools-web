<template>
  <div class="home">
    <b-img alt="Geiger-logo" src="../assets/logo.png" fluid width="200px" ></b-img>
    <div>
  <b-card
    title="Tool Title"
    img-src="@/assets/tool-example.png"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 16rem;"
    class="mx-auto"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>
    <b-button variant="primary" >Go somewhere</b-button>

        <a href="https://davidkernfhnw.github.io/geiger-tools-web/downloads/GEIGER-Toolbox.apk" target="_blank" >Download</a>
                <a href="https://github.com/davidkernfhnw/geiger-downloads/raw/main/android/GEIGER-Toolbox.apk" target="_blank" >Download external</a>

        


  </b-card>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
