import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/calendar";
import "./plugins/theme";
import "./plugins/chartist";
import "./components/Card";
import "./components/Offset";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
