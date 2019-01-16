<template>
  <v-app id="agentPoc">
    <MainNav></MainNav>
    <v-content>
      <v-container grid-list-md text-xs-center>
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-content>
    <v-footer color="#b81414" app>
      <span class="white--text">Tennessee Farmers Life Insurance Co. &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  components: { MainNav }
};
</script>

<style>
#mainContainer {
  border: solid gray 3px;
}
</style>
