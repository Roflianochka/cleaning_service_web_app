import AdminPage from "./pages/AdminPage";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import ServicePage from "./pages/ServicePage";
import Shop from "./pages/Shop";
import {
  BASKET_ROUTE,
  REGISTRATION_ROUTE,
  SERVICE_ROUTE,
  ADMIN_ROUTE,
  SHOP_ROUTE,
  LOGIN_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: SERVICE_ROUTE + "/:id",
    Component: ServicePage,
  },
];
