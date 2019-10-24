import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import NewBusinessRoutes from "@/views/NewBusiness/routes";
import ProductRoutes from "@/views/Products/routes";
import PolicyRoutes from "@/views/Policies/routes";
import CaseRoutes from "@/views/Cases/routes";
import ClientRoutes from "@/views/Clients/routes";

Vue.use(Router);

var mainRoutes = [
  {
    path: "/",
    name: "My Dashboard",
    component: Dashboard
  }
];

var allRoutes = [];
allRoutes = allRoutes.concat(
  mainRoutes,
  NewBusinessRoutes,
  CaseRoutes,
  ClientRoutes,
  ProductRoutes,
  PolicyRoutes
);

const routes = allRoutes;

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
