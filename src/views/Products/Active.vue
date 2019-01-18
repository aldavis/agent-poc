<template>
  <v-layout wrap>
    <v-flex xs12 sm12 md12 lg12>
      <card
        v-for="category in categories"
        :key="category.name"
        color="red"
        fullWidth:true
        v-bind:title="category.name"
      >
        <v-flex hover v-for="product in category.products" :key="product.name">
          <v-btn flat color="primary">
            <h4>{{product.name}}</h4>
          </v-btn>
        </v-flex>
      </card>
      <!-- <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex v-for="category in categories" :key="category.name">
            <v-card hover class="categoryCard">
              <v-card-title>{{category.name}}</v-card-title>
              <v-flex v-for="product in category.products" :key="product.name">
                <v-btn flat small color="primary">{{product.name}}</v-btn>
              </v-flex>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>-->
    </v-flex>
  </v-layout>
</template>

<script>
import Card from "@/components/Card";
export default {
  el: "#ActiveProducts",
  name: "ActiveProducts",
  components: { Card },
  data() {
    return {
      categories: [
        {
          name: "Universal Life",
          products: [
            {
              name: "FlexLife UL"
            },
            {
              name: "Platinum UL"
            }
          ]
        },
        {
          name: "Term",
          products: [
            {
              name: "Secure Term ART"
            },
            {
              name: "Secure Term 10"
            },
            {
              name: "Secure Term 20"
            },
            {
              name: "Secure Term 30"
            }
          ]
        },
        {
          name: "Whole Life",
          products: [
            {
              name: "Summit Whole Life"
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
