<template>
  <div>
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
        <v-list-tile :to="{path: '/products/active'}">
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
        <v-list-tile :to="{name: 'Tools'}">
          <v-list-tile-action>
            <v-icon>fas fa-wrench</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Tools</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Case Manager'}">
          <v-list-tile-action>
            <v-icon>fas fa-briefcase</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Case Manager</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Clients'}">
          <v-list-tile-action>
            <v-icon>fas fa-users</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Clients</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Pending Policies'}">
          <v-list-tile-action>
            <v-icon>fas fa-business-time</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Pending</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Prospects'}">
          <v-list-tile-action>
            <v-icon>fas fa-address-card</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Prospects</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Links'}">
          <v-list-tile-action>
            <v-icon>fas fa-link</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Links</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'forms'}">
          <v-list-tile-action>
            <v-icon>fas fa-file</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Blank Forms</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'search'}">
          <v-list-tile-action>
            <v-icon>fas fa-search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Search</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-calendar class="calendar"></v-calendar>
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

<style>
.calendar {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
