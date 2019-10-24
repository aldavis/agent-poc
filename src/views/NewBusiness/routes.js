import ProductList from "@/views/NewBusiness/ProductList.vue";
import Application from "@/views/NewBusiness/ExpressApp/Application.vue";
import Signatures from "@/views/NewBusiness/ExpressApp/Signatures.vue";
import Illustration from "@/views/NewBusiness/Illustration.vue";

const routes = [
  {
    path: "/newbusiness/productlist",
    name: "Product List",
    component: ProductList
  },
  {
    path: "/newbusiness/expressapp/application",
    name: "Application",
    component: Application
  },
  {
    path: "/newbusiness/expressapp/signatures",
    name: "Signatures",
    component: Signatures
  },
  {
    path: "/newbusiness/illustration",
    name: "Illustration",
    component: Illustration
  }
];
export default routes;
