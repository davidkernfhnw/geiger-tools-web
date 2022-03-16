<template>
  <!-- <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="text-center mediumgrey">Consortium Members</h3>
        </div>
      </div>
      <b-row class="d-flex consortium-logos">
        <b-col class="col-md-3 col-sm-2 col-xs-3 center-block" cols="md-1 sm-2 xs-3">
          <img src="@/assets/footer/fhnw.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/ulei.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/atos.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/bbb.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/phfreiburg.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/kaspersky.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/montimage.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/kpmg.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/techeu.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/skv.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/sra.gif" width="100px" />
        </b-col>
        <b-col class="col-md-3 col-sm-2 col-xs-3">
          <img src="@/assets/footer/clujit.gif" width="100px" />
        </b-col>
      </b-row>
    </div>
  </footer> -->

  
  <footer id="footer" style="background-color: white">
    <b-container fluid class="py-4">
      <b-row class="d-flex mx-auto">
        <b-col  sm="12" md="2">
        <!-- EU -->
            <img style="max-height: 50px; padding-right: 25px; margin-top: 5px; margin-bottom: 10px" src="@/assets/footer/eu-logo.png" />
        </b-col>
        <b-col  sm="12" md="10" >
            <h6 class="align-left"><small  >
                This project has received funding from the European Union's Horizon 2020 research 
                and innovation programme under grant agreement No. 883588 (GEIGER). 
                The opinions expressed and arguments employed herein do not necessarily reflect the official views of 
                the funding body.</small>
                </h6>
    </b-col>
      </b-row>
      <b-row>
        <b-col class="text-center">
                    <small class="credit" style="font-weight: 200"> &copy; 2022 GEIGER</small>

        </b-col>

      </b-row>
    </b-container>
    </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
<style scoped>
.align-left {
  text-align: left;
}
</style>