import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import ProjectRequest from "@/pages/ProjectRequest.vue";
import ProjectStatus from "@/pages/ProjectStatus.vue";
import Messenger from "@/pages/Messenger.vue";
import Settings from "@/pages/AdminSettings.vue";
import LandingPage from "@/pages/LandingPage.vue";
import Teams from "@/pages/Teams.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      
      {
        path: "/teams",
        name: "Teams",
        component: Teams,
      },
      {
        path: "/projectRequest",
        name: "Project Request",
        component: ProjectRequest,
      },
      {
        path: "/pricing-quoting",
        name: "Pricing and Quoting",
        component: PricingQuoting,
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

routes.forEach(route => {
  if (route.name) {
    route.meta = { ...route.meta, fontWeight: "500" };
  }
});


export default routes;
