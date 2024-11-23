// Pages
// Private
import Infor from "../pages/client/Customer/Infor";
import ChangePassword from "../pages/client/Customer/ChangePassword";
import MyOrder from "../pages/client/Customer/MyOrder";
import CreateShipment from "../pages/client/Customer/CreateShipment";
import OrderDelivered from "../pages/client/Customer/OrderDelivered";
import DetailOrder from "../pages/client/Customer/DetailOrder";

//Admin
import UserStatistics from "../pages/admin/UserStatistics";
import OrderStatistics from "../pages/admin/OrderStatistics";
import AddressMng from "pages/admin/AdressMng";
import DetailOrderAdmin from "pages/admin/DetailOrderAdmin";
import CreateOrder from "pages/admin/CreateOrder";

//Deliver
import ChangePasswordDeliver from "pages/client/Deliver/ChangePasswordDeliver";
import DetailOrderDeliver from "pages/client/Deliver/DetailOrderDeliver";
import InforDeliver from "pages/client/Deliver/InforDeliver";
import MyOrderDeliver from "pages/client/Deliver/MyOrderDeliver";

//Account
import Login from "../pages/account/Login";
import ForGot from "../pages/account/ForGot";
import SignUp from "../pages/account/SignUp";
import AboutUs from "../pages/client/AboutUs";
import { routerName } from "./routerName";
import CrossBorderEcommerce from "../pages/client/Services/CrossBorderEcommerce";
import CrossBorderTransportation from "pages/client/Services/CrossBorderTransportation";
import ContactSales from "pages/client/ContactSales";
import Blog from "pages/client/Blog";
import Home from "pages/client/Home";

// Public routes
const publicRoutes = [
  { path: routerName.home.slug, component: Home },
  { path: routerName.blog.slug, component: Blog },
  { path: routerName.aboutUs.slug, component: AboutUs },
  {
    path: routerName.servicesCrossBorderEcommerce.slug,
    component: CrossBorderEcommerce,
  },
  {
    path: routerName.servicesCrossBorderTransportation.slug,
    component: CrossBorderTransportation,
  },
  { path: routerName.contactSales.slug, component: ContactSales },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForGot },
  { path: "/sign-up", component: SignUp },
];

const privateRoutes = [
  { path: "/customer/", component: MyOrder, role: "ROLE_USER" },
  { path: "/customer/infor", component: Infor, role: "ROLE_USER" },
  { path: "/customer/change-password", component: ChangePassword, role: "ROLE_USER" },
  { path: "/customer/my-order", component: MyOrder, role: "ROLE_USER" },
  { path: "/customer/my-order/deliver", component: OrderDelivered, role: "ROLE_USER" },
  { path: "/customer/create-shipment", component: CreateShipment, role: "ROLE_USER" },
  { path: "/customer/detail-order/:id", component: DetailOrder, role: "ROLE_USER" },

  { path: "/admin/", component: OrderStatistics, role: "ROLE_ADMIN" },
  { path: "/admin/user-statistics", component: UserStatistics, role: "ROLE_ADMIN" },
  { path: "/admin/order-statistics", component: OrderStatistics, role: "ROLE_ADMIN" },
  { path: "/admin/address-management", component: AddressMng, role: "ROLE_ADMIN" },
  { path: "/admin/detail-order/:id", component: DetailOrderAdmin, role: "ROLE_ADMIN" },
  { path: "/admin/create-shipment", component: CreateOrder, role: "ROLE_ADMIN" },

  { path: "/deliver/", component: MyOrderDeliver, role: "ROLE_DELIVER" },
  { path: "/deliver/change-password", component: ChangePasswordDeliver, role: "ROLE_DELIVER" },
  { path: "/deliver/infor", component: InforDeliver, role: "ROLE_DELIVER" },
  { path: "/deliver/my-order", component: MyOrderDeliver, role: "ROLE_DELIVER" },
  { path: "/deliver/detail-order/:id", component: DetailOrderDeliver, role: "ROLE_DELIVER" },
];

export { publicRoutes, privateRoutes };
