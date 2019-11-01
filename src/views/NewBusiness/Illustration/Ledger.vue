<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 md12 lg12>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="text-left">
                <th class="px-4 text-left">Year</th>
                <th class="px-4 text-left">Age</th>
                <th class="px-4 text-left">Current Premium</th>
                <th class="px-4 text-left">Total Current Premium</th>
                <th class="px-4 text-left">Maximum Guaranteed Premium</th>
                <th>Total Death Benefit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in ledgerValues" :key="item.year">
                <td>{{ item.year }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.currentPremium }}</td>
                <td>{{ item.totalCurrentPremium }}</td>
                <td>{{ item.maxGuaranteePremium }}</td>
                <td>{{ item.totalDeathBenefit }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      ledgerValues: [
        {
          year: "1",
          age: "42",
          currentPremium: "$545.00",
          totalCurrentPremium: "$545.00",
          maxGuaranteePremium: "$545.00",
          totalDeathBenefit: "$150,000"
        },
        {
          year: "2",
          age: "43",
          currentPremium: "$545.00",
          totalCurrentPremium: "$545.00",
          maxGuaranteePremium: "$545.00",
          totalDeathBenefit: "$150,000"
        },
        {
          year: "3",
          age: "44",
          currentPremium: "$545.00",
          totalCurrentPremium: "$545.00",
          maxGuaranteePremium: "$545.00",
          totalDeathBenefit: "$150,000"
        }
      ]
    };
  }
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 0.25rem;
  text-align: left;
}
tbody tr:nth-child(odd) {
  background: #eee;
}
</style>
