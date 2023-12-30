import AdminPage from "./pages/AdminPage";
import Auth from "./pages/Auth";
import ServicesPage from "./pages/ServicesPage";
import ServicePage from "./pages/ServicePage";
import MainPage from "./pages/MainPage";
import UserProfile from "./pages/UserProfile";
import EmployeesPage from "./pages/EmployeesPage";
import UserCompletedServicesPage from "./pages/UserCompletedServicesPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import FaqPage from "./pages/FAQPage";

import {
  REGISTRATION_ROUTE,
  SERVICE_ROUTE,
  ADMIN_ROUTE,
  MAIN_ROUTE,
  LOGIN_ROUTE,
  USER_ROUTE,
  SERVICES_ROUTE,
  EMPLOYEES_ROUTE,
  USER_COMPLETED_SERVICES_ROUTE,
  APPOINTMENTS_ROUTE,
  FAQ_ROUTE
} from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: EMPLOYEES_ROUTE,
    Component: EmployeesPage,
  },
  {
    path: USER_COMPLETED_SERVICES_ROUTE,
    Component: UserCompletedServicesPage,
  },
  {
    path: USER_ROUTE,
    Component: UserProfile,
  },
  {
    path: APPOINTMENTS_ROUTE,
    Component: AppointmentsPage,
  },
];
export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: SERVICES_ROUTE,
    Component: ServicesPage,
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

  {
    path: FAQ_ROUTE,
    Component: FaqPage,
  },
];
