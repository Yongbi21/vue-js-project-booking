import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import PricingQuoting from "@/pages/PricingQuoting.vue";
import ProjectRequest from "@/pages/ProjectRequest.vue";
import ProjectStatus from "@/pages/ProjectStatus.vue";
import Messenger from "@/pages/Messenger.vue";
import Settings from "@/pages/AdminSettings.vue";
import LandingPage from "@/pages/LandingPage.vue";
import Request1 from "@/pages/Request1.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: LandingPage,
  },
  {
    path: "/request1",
    name: "request",
    component: Request1,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    children: [
      {
      path: '/dashboard',
      name: 'dashboard',
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
