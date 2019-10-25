import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../layout/index.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
        {
          path: 'dashboard',
          component: () => import('../views/dashboard/index.vue'),
          name: 'Dashboard',
          meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
        }
      ] 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
