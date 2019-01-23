<template>
  <v-container>
    <v-layout wrap>
      <v-flex sm12 md12 lg12 justify-end>
        <h3>Policy Search</h3>
      </v-flex>
      <v-flex sm12 md12 lg4></v-flex>
      <v-flex id="searchInput" sm12 md12 lg4 class="text-lg-right">
        <v-text-field
          class="search-input"
          label="Policy #"
          single-line
          v-model="policySearchInput"
          @keyup.enter="findPolicy"
        ></v-text-field>
      </v-flex>
      <v-flex sm12 md12 lg4 class="text-lg-left">
        <v-btn large color="primary" @click="findPolicy">Search</v-btn>
      </v-flex>
      <v-flex sm12 md12 lg4></v-flex>
    </v-layout>
    <v-layout row justify-center v-show="searchErrorOccurred">
      <v-flex xs6>
        <v-card>{{searchError}}</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import PolicyService from "@/services/PolicyService.js";

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
      var policy = {
        id: 1,
        policyHolderFirstName: "Steve",
        policyHolderLastName: "Rogers",
        productType: "Awesome Life Insurance",
        annualPremium: 2500.52,
        adminSystem: "LifeComm",
        lineOfBusiness: "Term",
        suspendCodes: "A,B,C",
        status: "Pending",
        coverage: {
          status: "Pending",
          amount: "$250,000",
          productType: "Awesome Life Insurance",
          annual: "$288.50"
        }
      };

      this.$store.dispatch("setCurrentPolicy", policy).then(() => {
        this.$router.push({ name: "Policy Details" });
      });

      // PolicyService.getPolicy(this.policySearchInput)
      //   .then(response => {
      //     this.$store.dispatch("setCurrentPolicy", response).then(() => {
      //       this.$router.push({ name: "Policy Details" });
      //     });
      //   })
      //   .catch(error => {
      //     this.searchErrorOccurred = true;
      //     this.searchError = error.message;
      //   });
    }
  }
};
</script>

<style>
</style>
