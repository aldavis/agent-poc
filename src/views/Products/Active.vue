<template>
  <v-layout justify-center>
    <v-flex xs12 sm6>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="category in categories" :key="category.name">
            <v-card light hover class="categoryCard">
              <v-card-title>{{category.name}}</v-card-title>
              <v-flex v-for="product in category.products" :key="product.name">
                <v-card flat dark>
                  <v-card-text>{{product.name}}</v-card-text>
                </v-card>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  el: "#ActiveProducts",
  name: "ActiveProducts",
  data() {
    return {
      categories: [
        {
          name: "Category one",
          products: [
            {
              name: "Product One"
            },
            {
              name: "Product Two"
            }
          ]
        },
        {
          name: "Category Two",
          products: [
            {
              name: "Product One"
            },
            {
              name: "Product Two"
            },
            {
              name: "Product Three"
            },
            {
              name: "Product Four"
            }
          ]
        },
        {
          name: "Category Three",
          products: [
            {
              name: "Product One"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.categoryCard {
  min-height: 500px;
}
</style>
