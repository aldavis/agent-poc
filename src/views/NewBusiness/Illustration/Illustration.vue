<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md12 lg9>
        <v-card height="500px">
          <policy-info></policy-info>
          <v-card-actions>
            <v-btn color="green" left>Calcualte</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md12 lg3>
        <v-card height="500px">
          <illustration-summary></illustration-summary>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-card>
          <ledger></ledger>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PolicyInfo from "@/views/NewBusiness/Illustration/PolicyInfo.vue";
import Ledger from "@/views/NewBusiness/Illustration/Ledger.vue";
import IllustrationSummary from "@/views/NewBusiness/Illustration/Summary.vue";
export default {
  components: { PolicyInfo, Ledger, IllustrationSummary }
};
</script>

<style>
</style>
