<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs10 offset-xs-2>
        <h3>Policy Search</h3>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs6>
        <v-text-field
          label="Policy #"
          single-line
          outline
          v-model="policySearchInput"
          @keyup.enter="findPolicy"
        ></v-text-field>
      </v-flex>
      <v-flex xs6 class="text-lg-left">
        <v-btn large color="primary" @click="findPolicy">Search</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row justify-center v-show="searchErrorOccurred">
      <v-flex xs6>
        <v-card>{{searchError}}</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PolicyService from "@/services/PolicyService.js";

export default {
  name: "policySearch",
  data() {
    return {
      policySearchInput: "",
      searchErrorOccurred: false,
      searchError: ""
    };
  },
  methods: {
    findPolicy() {
      PolicyService.getPolicy(this.policySearchInput)
        .then(response => {
          this.$store.dispatch("setCurrentPolicy", response.data).then(() => {
            this.$router.push({ name: "policyDetails" });
          });
        })
        .catch(error => {
          this.searchErrorOccurred = true;
          this.searchError = error.message;
        });
    }
  }
};
</script>

<style>
</style>
