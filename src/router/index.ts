import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../layout/index.vue'

Vue.use(VueRouter);

export const constantRoutes = [
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
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('../views/error-page/401.vue'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('../views/error-page/404.vue'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
];


const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // @ts-ignore 
  router.matcher = newRouter.matcher // reset router
}

// const routes = [
//   {
//     path: '/',
//     component: Layout,
//     redirect: '/dashboard',
//     children: [
//         {
//           path: 'dashboard',
//           component: () => import('../views/dashboard/index.vue'),
//           name: 'Dashboard',
//           meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
//         }
//       ] 
//   }
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default router;
