import Details from "@/views/Policies/Details.vue";
import Pending from "@/views/Policies/Pending.vue";
import Search from "@/views/Policies/Search.vue";

const routes = [
  {
    path: "/policies/search",
    name: "searchPolicies",
    component: Search
  },
  {
    path: "/policies/details",
    name: "policyDetails",
    component: Details
  },
  {
    path: "/policies/pending",
    name: "pendingPolicies",
    component: Pending
  }
];
export default routes;
