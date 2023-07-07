/* eslint-disable prettier/prettier */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});
