<template>
  <card color="#333333" title="Cases Overview">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="cases"
      :pagination.sync="pagination"
      select-all
      item-key="name"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th
            v-for="header in props.headers"
            :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon small>arrow_upward</v-icon>
            {{ header.text }}
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="rowClicked">
          <td class="text-xs-center">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.faceAmount }}</td>
          <td class="text-xs-center">{{ props.item.date }}</td>
          <td class="text-xs-left">
            {{ props.item.status }}
            <v-progress-linear
              :color="props.item.statusColor"
              height="20"
              :value="props.item.completionPercentage"
            ></v-progress-linear>
          </td>
        </tr>
      </template>
    </v-data-table>
  </card>
</template>
<script>
import Card from "@/components/Card";
export default {
  name: "List",
  components: { Card },
  data: () => ({
    pagination: {
      sortBy: "name"
    },
    selected: [],
    headers: [
      { text: "Name" },
      { text: "Face Amount" },
      { text: "Date" },
      { text: "Status" }
    ],
    cases: [
      {
        name: "Steve Rogers",
        faceAmount: "$10,000",
        date: "01/01/2010",
        status: "Pending Underwriting",
        completionPercentage: "50",
        statusColor: "green"
      },
      {
        name: "Bruce Wayne",
        faceAmount: "$10,000",
        date: "01/01/2010",
        status: "In-Force",
        completionPercentage: "100",
        statusColor: "green"
      },
      {
        name: "Clark Kent",
        faceAmount: "$10,000",
        date: "01/01/2010",
        status: "Submitted",
        completionPercentage: "25",
        statusColor: "green"
      },
      {
        name: "Peter Parker",
        faceAmount: "$10,000",
        date: "01/01/2010",
        status: "Rejected",
        completionPercentage: "100",
        statusColor: "red"
      }
    ]
  }),
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.desserts.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    rowClicked(row) {
      console.log("clicked" + row);
    }
  }
};
</script>
<style>
</style>
