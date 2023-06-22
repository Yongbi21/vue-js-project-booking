import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import TableList from "@/pages/ProjectRequest.vue";
import Test from "@/pages/Test.vue";
import Messenger from "@/pages/Messenger.vue";
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
        path: "projectRequest",
        component: TableList,
      },
      {
        path: "test",
        name: "Test",
        component: Test,
      },
      {
        path: "messenger",
        component: Messenger,
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
