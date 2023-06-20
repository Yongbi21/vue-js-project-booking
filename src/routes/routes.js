import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import TableList from "@/pages/ProjectRequest.vue";
/*import Typography from "@/pages/Typography.vue";*/
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Settings from "@/pages/AdminSettings.vue";

import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "pricing-quoting",
        component: PricingQuoting,
      },
      {
        path: "table",
        component: TableList,
      },
      /*{
        path: "typography",
        name: "Typography",
        component: Typography,
      },*/
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "notifications",
        component: Notifications,
      },
      {
        path: "settings",
        name: "Admin Settings",
        component: Settings,
      },
      {
        path: "/",
        name: "login",
        component: Login,
      },
    ],
  },
];

export default routes;
