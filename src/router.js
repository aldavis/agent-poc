import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import ProductRoutes from "@/views/Products/routes";
import PolicyRoutes from "@/views/Policies/routes";
import CaseRoutes from "@/views/Cases/routes";
import ClientRoutes from "@/views/Clients/routes";
import ProspectRoutes from "@/views/Prospects/routes";
import LinkRoutes from "@/views/Links/routes";
import FormRoutes from "@/views/BlankForms/routes";
import SearchRoutes from "@/views/Search/routes";
import ToolsRoutes from "@/views/Tools/routes";

Vue.use(Router);

var mainRoutes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  }
];

var allRoutes = [];
allRoutes = allRoutes.concat(
  mainRoutes,
  CaseRoutes,
  ClientRoutes,
  ProductRoutes,
  PolicyRoutes,
  ProspectRoutes,
  SearchRoutes,
  ToolsRoutes,
  FormRoutes,
  LinkRoutes
);

const routes = allRoutes;

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
