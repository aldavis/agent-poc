import Details from "@/views/Policies/Details.vue";
import Pending from "@/views/Policies/Pending.vue";
import Search from "@/views/Policies/Search.vue";

const routes = [
  {
    path: "/policies/search",
    name: "Search Policies",
    component: Search
  },
  {
    path: "/policies/details",
    name: "Policy Details",
    component: Details
  },
  {
    path: "/policies/pending",
    name: "Pending Policies",
    component: Pending
  }
];
export default routes;
