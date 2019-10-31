<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-combobox outlined v-model="selectedProductLine" :items="availableProductLines"></v-combobox>
      </v-flex>
      <v-flex>
        <v-combobox outlined v-model="selectedProduct" :items="availableTermProducts"></v-combobox>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-text-field label="Face Amount" required></v-text-field>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      selectedProductLine: "Term Life",
      availableProductLines: ["Term Life", "Whole Life", "Universal Life"],
      selectedProduct: "Term 20",
      availableTermProducts: ["Term 10", "Term 20", "Term 30"],
      availableWholeLifeProducts: ["Summit"],
      availableUniversalLifeProducts: ["Flex UL", "Platinum UL"]
    };
  }
};
</script>
<style>
</style>
