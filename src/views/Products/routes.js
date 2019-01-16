import ActiveProducts from "@/views/Products/Active.vue";
import ArchivedProducts from "@/views/Products/Archived.vue";

const routes = [
  {
    path: "/products/active",
    name: "activeProducts",
    component: ActiveProducts
  },
  {
    path: "/products/archived",
    name: "archivedProducts",
    component: ArchivedProducts
  }
];
export default routes;
