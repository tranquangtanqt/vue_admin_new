const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  // avatar: state => state.user.avatar,
  avatar: state =>
    "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
  // name: state => state.user.name,
  name: state => "User_Name",
  introduction: state => state.user.introduction,
  // roles: state => state.user.roles,
  roles: state => "editor",
  // permission_routes: state => state.permission.routes,
  permission_routes: state => itemBar,
  errorLogs: state => state.errorLog.logs
};

const itemBar = [
  // {
  //   path: '/icon',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/icons/index'),
  //       name: 'Icons',
  //       meta: { title: 'Icons', icon: 'icon', noCache: true }
  //     }
  //   ]
  // },

  {
    path: "/error",
    component: "layout/Layout",
    redirect: "noRedirect",
    name: "ErrorPages",
    meta: {
      title: "Error Pages",
      icon: "404"
    },
    children: [
      {
        path: "401",
        component: () => import("../views/error-page/401.vue"),
        name: "Page401",
        meta: { title: "401", noCache: true }
      },
      {
        path: "404",
        component: () => import("../views/error-page/404.vue"),
        name: "Page404",
        meta: { title: "404", noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
  { path: "*", redirect: "/404", hidden: true }
];

export default getters;
