<template>
  <div class="mainNav">
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile :to="{path: '/'}">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Product List'}">
          <v-list-tile-action>
            <v-icon>fab fa-product-hunt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>New Business</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Existing Business'}">
          <v-list-tile-action>
            <v-icon>fab fa-product-hunt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Existing Business</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <!-- <v-list-tile :to="{path: '/products/active'}">
          <v-list-tile-action>
            <v-icon>fab fa-product-hunt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Current Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Search Policies'}">
          <v-list-tile-action>
            <v-icon>fas fa-money-check-alt</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inforce Policies</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Archived Products'}">
          <v-list-tile-action>
            <v-icon>fas fa-file-archive</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Retired Products</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Pending Policies'}">
          <v-list-tile-action>
            <v-icon>fas fa-business-time</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pending</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
      </v-list>
    </v-navigation-drawer>
    <v-toolbar flat prominent app style="background: #eee;">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data: () => ({
    drawer: null,
    title: null
  }),

  watch: {
    $route(val) {
      this.title = val.name;
    }
  },
  props: {
    source: String
  }
};
</script>

<style scoped>
.mainNav {
  background-color: green;
}
</style>
