import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import ProjectRequest from "@/pages/ProjectRequest.vue";
import ProjectStatus from "@/pages/ProjectStatus.vue";
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
    component: DashboardLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/pricingquoting",
        name: "Pricing Qoutiing",
        component: PricingQuoting,
      },
      {
        path: "/projectrequest",
        name: "Project Request",
        component: ProjectRequest,
      },
      {
        path: "/projectstatus",
        name: "Project Status",
        component: ProjectStatus,
      },
      {
        path: "/Messenger",
        component: Messenger,
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
      },
    ],
  },
];

routes.forEach(route => {
  if (route.name) {
    route.meta = { ...route.meta, fontWeight: "500" };
  }
});


export default routes;
