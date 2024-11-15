// Pages
// Private
import Infor from "../pages/client/Customer/Infor";
import ChangePassword from "../pages/client/Customer/ChangePassword";
import MyOrder from "../pages/client/Customer/MyOrder";
import CreateShipment from "../pages/client/Customer/CreateShipment";
import OrderDelivered from "../pages/client/Customer/OrderDelivered";
import DetailOrder from "../pages/client/Customer/DetailOrder";

//Account
import Login from "../pages/account/Login";
import ForGot from "../pages/account/ForGot";
import SignUp from "../pages/account/SignUp";
import AboutUs from "../pages/client/AboutUs";
import {routerName} from "./routerName";
import CrossBorderEcommerce from "../pages/client/Services/CrossBorderEcommerce";
import CrossBorderTransportation from "pages/client/Services/CrossBorderTransportation";
import ContactSales from "pages/client/ContactSales";
import Blog from "pages/client/Blog";
import Home from "pages/client/Home";

// Public routes
const publicRoutes = [
    {path: routerName.home.slug, component: Home},
    {path: routerName.blog.slug, component: Blog},
    {path: routerName.aboutUs.slug, component: AboutUs},
    {path: routerName.servicesCrossBorderEcommerce.slug, component: CrossBorderEcommerce},
    {path: routerName.servicesCrossBorderTransportation.slug, component: CrossBorderTransportation},
    {path: routerName.contactSales.slug, component: ContactSales},
    {path: "/login", component: Login},
    {path: "/forgot-password", component: ForGot},
    {path: "/sign-up", component: SignUp}
];

const privateRoutes = [
    { path: "/customer/", component: MyOrder },
    { path: "/customer/infor", component: Infor },
    { path: "/customer/change-password", component: ChangePassword },
    { path: "/customer/my-order", component: MyOrder },
    { path: "/customer/my-order/deliver", component: OrderDelivered },
    { path: "/customer/create-shipment", component: CreateShipment },
    { path: "/customer/detail-order/:id", component: DetailOrder },
];

export {publicRoutes, privateRoutes};
