<template>  
  <footer id="footer" style="background-color: white">
    <b-container fluid class="py-4">
      <b-row class="d-flex mx-auto">
        <b-col  sm="12" md="2">
        <!-- EU -->
            <img style="max-height: 50px; padding-right: 25px; margin-top: 5px; margin-bottom: 10px" class="align-right" src="@/assets/footer/eu-logo.png" />
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