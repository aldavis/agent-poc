<template>
  <v-card raised :elevation="20">
    <v-layout>
      <v-flex>
        <h3>Application Summary for {Applicant Name}</h3>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>Product Type</v-flex>
    </v-layout>
    <v-layout>
      <v-flex>Policy Amount</v-flex>
    </v-layout>
    <v-layout>
      <v-flex>Riders</v-flex>
    </v-layout>
    <v-layout>
      <v-flex>Monthly Payment</v-flex>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  props: {}
};
</script>
