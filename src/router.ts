import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LogInComponent from "@/components/body/LogInComponent.vue";
import HomeComponent from "@/components/body/HomeComponent.vue";
import ProductsComponent from "@/components/body/ProductsComponent.vue";
import AboutComponent from "@/components/body/AboutComponent.vue";
import ContactComponent from "@/components/body/ContactComponent.vue";
import CartPageComponent from "@/components/cart/CartPageComponent.vue";
import CheckoutDataComponent from "@/components/cart/CheckoutDataComponent.vue";
import CheckoutPaymentComponent from "@/components/cart/CheckoutPaymentComponent.vue";
import CheckoutSummaryComponent from "@/components/cart/CheckoutSummaryComponent.vue";
import CartSuccess from "@/components/cart/CartSuccess.vue";
import MyOrders from "@/components/body/MyOrders.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductsComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutComponent,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactComponent,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogInComponent,
  },
  {
    path: "/cart-page",
    name: "CartPage",
    component: CartPageComponent,
  },
  {
    path: "/checkout/data",
    name: "CheckoutData",
    component: CheckoutDataComponent,
  },
  {
    path: "/checkout/payment",
    name: "CheckoutPayment",
    component: CheckoutPaymentComponent,
  },
  {
    path: "/checkout/summary",
    name: "CheckoutSummary",
    component: CheckoutSummaryComponent,
  },
  {
    path: "/checkout/success",
    name: "CheckoutSuccess",
    component: CartSuccess,
  },
  {
    path: "/my-orders",
    name: "MyOrders",
    component: MyOrders,
  },
  { path: "/:catchAll(.*)", redirect: "/products" },
];

const router = createRouter({
  history: createWebHashHistory("/eco-kirchner"),
  routes,
});

export default router;
