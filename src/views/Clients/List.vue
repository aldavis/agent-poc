<template>
        <v-data-table
      v-model="selected"
      :headers="headers"
      :items="clients"
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
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>{{ props.item.firstname }}</td>
          <td class="text-xs-right">{{ props.item.lastname }}</td>
          <td class="text-xs-right">{{ props.item.policyNum }}</td>
          <td class="text-xs-right">{{ props.item.product }}</td>
          <td class="text-xs-right">{{ props.item.plan }}</td>
          <td class="text-xs-right">{{ props.item.issueDate }}</td>
        </tr>
      </template>
    </v-data-table>
</template>
<script>
export default {
  name: "List",
  data: () => ({
    pagination: {
      sortBy: "name"
    },
    selected: [],
    headers: [
      {
        text: "First Name",
        align: "left",
        value: "firstname"
      },
      { text: "Last Name", value: "lastname" },
      { text: "Policy #", value: "policyNum" },
      { text: "Product", value: "product" },
      { text: "Plan", value: "plan" },
      { text: "Issue Date", value: "issueDate" }
    ],
    clients: [
      {
        value: false,
        firstname: "Steve",
        lastname: "Rogers",
        policyNum: 62645,
        product: "Product One",
        plan: "P123",
        issueDate: "01/01/2010"
      },
      {
        value: false,
        firstname: "Peter",
        lastname: "Parker",
        policyNum: 62645,
        product: "Product Two",
        plan: "P123",
        issueDate: "05/03/2001"
      },
      {
        value: false,
        firstname: "Tony",
        lastname: "Stark",
        policyNum: 62645,
        product: "Product 004",
        plan: "P123",
        issueDate: "04/01/1995"
      },
      {
        value: false,
        firstname: "Steven",
        lastname: "Strange",
        policyNum: 62645,
        product: "Product One",
        plan: "P123",
        issueDate: "01/01/2001"
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
    }
  }
};
</script>
<style>
</style>
