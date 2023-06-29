import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import ProjectRequest from "@/pages/ProjectRequest.vue";
import ProjectStatus from "@/pages/ProjectStatus.vue";
import Messenger from "@/pages/Messenger.vue";
import Settings from "@/pages/AdminSettings.vue";
import Signup from "@/pages/Signup.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "/pricing-quoting",
        name: "Pricing and Quoting",
        component: PricingQuoting,
      },
      {
        path: "/projectRequest",
        name: "Project Request",
        component: ProjectRequest,
      },
      {
        path: "/projectstatus",
        name: "projectstatus",
        component: ProjectStatus,
      },
      {
        path: "/messenger",
        name: "Messenger",
        component: Messenger,
      },
      {
        path: "/settings",
        name: "Admin Settings",
        component: Settings,
      },
    ],
  },
];

export default routes;

