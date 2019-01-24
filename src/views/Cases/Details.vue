<template>
  <v-container fill-height fluid grid-list-xl></v-container>
</template>

<script>
export default {
  name: "caseDetails",
  data() {
    return {
      name: "Steve Rogers",
      faceAmountTotals: "$5,250,000",
      dateSubmitted: "01/01/1998",
      currentStatus: "Pending Underwriting",
      statusHistory: [
        { date: "01/01/2001", status: "submitted" },
        { date: "01/05/2001", status: "initial review complete" },
        { date: "01/07/2001", status: "pending underwriting" }
      ]
    };
  }
};
</script>
