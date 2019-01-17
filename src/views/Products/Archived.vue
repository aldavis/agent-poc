<template>
  <v-tabs centered icons-and-text>
    <v-tabs-slider color="red"></v-tabs-slider>

    <v-tab href="#tab-1">Active
      <v-icon>done</v-icon>
    </v-tab>

    <v-tab href="#tab-2">Inactive
      <v-icon>clear</v-icon>
    </v-tab>

    <v-tab-item v-for="i in 2" :value="'tab-' + i" :key="i">
      <v-card flat>
        <v-card-text>Products</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
export default {
  el: "#ActiveProducts",
  name: "ActiveProducts",
  data() {
    return {
      products: []
    };
  },
  methods: {
    getProducts(index) {
      if (index === 1) {
        this.products = [
          {
            name: "Product Two",
            status: "Inactive"
          }
        ];
      } else {
        this.products = [
          {
            name: "Product One",
            status: "Active"
          }
        ];
      }
    }
  }
};
</script>

<style>
</style>
