import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import TableList from "@/pages/ProjectRequest.vue";
import ChartCards from "@/pages/ProjectStatus.vue";
import Messenger from "@/pages/Messenger.vue";
import Settings from "@/pages/AdminSettings.vue";

import Request from "@/pages/Request.vue";
import Request1 from "@/pages/Request1.vue";
import LandingPage from "@/pages/LandingPage.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: LandingPage,
  },
  {
  path: "/request",
  name: "request",
  component: Request,
  },
  {
    path: "/request1",
    name: "request1",
    component: Request1,
    },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
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
        path: "projectStatus",
        name: "Project Status",
        component: ChartCards,
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
