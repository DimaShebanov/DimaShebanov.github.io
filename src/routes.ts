// import RequestForm from "./pages/RequestForm";
import Orders from "./pages/Orders";
import Landing from "./pages/Landing/Landing";

const routes = {
  orders: {
    path: "/orders",
    component: Orders,
  },
  // home: {
  //   path: "/",
  //   component: RequestForm,
  // },
  home: {
    path: "/",
    component: Landing,
  },
} as const;

export default routes;
