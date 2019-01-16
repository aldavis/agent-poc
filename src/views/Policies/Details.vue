<template>
  <v-container fluid>
    <h1>Details for Policy #{{policy.id}}</h1>
    <v-layout row>
      <v-flex xs6>
        <v-card>
          <div>Policy Holder: {{policy.policyHolderName}}</div>
          <div>Annual Premium: {{policy.annualPremium}}</div>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card>
          <div>Product Type: {{policy.productType}}</div>
          <div>Line of Business: {{policy.lineOfBusiness}}</div>
          <div>Admin System: {{policy.adminSystem}}</div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "activePolicies",
  components: {},
  computed: {
    policy() {
      return this.$store.state.currentPolicy;
    }
  }
};
</script>
<style lang="css">
</style>
