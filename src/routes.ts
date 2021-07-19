import RequestForm from "./pages/RequestForm";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";

const routes = {
  orderDetails: {
    path: "/orders/:id",
    component: OrderDetails,
  },
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
