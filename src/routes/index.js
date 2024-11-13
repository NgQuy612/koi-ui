// Pages
import Home from "../pages/client/Home";

// Private
import Infor from "../pages/client/Customer/Infor";
import ChangePassword from "../pages/client/Customer/ChangePassword";
import MyOrder from "../pages/client/Customer/MyOrder";
import DetailOrder from "../pages/client/Customer/DetailOrder";
import CreateShipment from "../pages/client/Customer/CreateShipment";
import ForGot from "../pages/account/ForGot";
import SignUp from "../pages/account/SignUp";

//Account
import Login from "../pages/account/Login";

// Public routes
const publicRoutes = [{ path: "/", component: Home }];

const privateRoutes = [
  { path: "/customer/", component: MyOrder },
  { path: "/customer/infor", component: Infor },
  { path: "/customer/change-password", component: ChangePassword },
  { path: "/customer/my-order", component: MyOrder },
  { path: "/customer/create-shipment", component: CreateShipment },
  { path: "/customer/detail-order/:id", component: DetailOrder },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForGot },
  { path: "/sign-up", component: SignUp },
];

export { publicRoutes, privateRoutes };
