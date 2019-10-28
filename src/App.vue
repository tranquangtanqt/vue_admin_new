<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
//       item: [
//   {
//     path: '/error',
//     component: 'layout/Layout',
//     redirect: 'noRedirect',
//     name: 'ErrorPages',
//     meta: {
//       title: 'Error Pages',
//       icon: '404'
//     },
//     children: [
//       {
//         path: '401',
//         component: () => import('./views/error-page/401.vue'),
//         name: 'Page401',
//         meta: { title: '401', noCache: true }
//       },
//       {
//         path: '404',
//         component: () => import('./views/error-page/404.vue'),
//         name: 'Page404',
//         meta: { title: '404', noCache: true }
//       }
//     ]
//   },
// //   // 404 page must be placed at the end !!!
// //   // { path: '*', redirect: '/404', hidden: true }
// //   { path: '*', redirect: '/', hidden: true }
//       ]
    }
  },
  name: 'App',
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
  },
  created() {
    // this.permission_routes = this.item
  }
}
</script>
