import ActiveProducts from "@/views/Products/Active.vue";
import ArchivedProducts from "@/views/Products/Archived.vue";

const routes = [
  {
    path: "/products/active",
    name: "Active Products",
    component: ActiveProducts
  },
  {
    path: "/products/archived",
    name: "Archived Products",
    component: ArchivedProducts
  }
];
export default routes;
