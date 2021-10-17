import RequestForm from "./pages/RequestForm";
import Orders from "./pages/Orders";

const routes = {
  orders: {
    path: "/orders",
    component: Orders,
  },
  home: {
    path: "/",
    component: RequestForm,
  },
} as const;

export default routes;
