<template>
  <v-container>
    <v-layout>
      <v-flex md9>
        <v-card height="500px">
          <policy-info></policy-info>
          <v-card-actions>
            <v-btn color="green" left>Start Application</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex md3>
        <v-card height="500px">
          <illustration-summary></illustration-summary>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
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
