import { RouteRecordRaw } from "vue-router";

const routers: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    children: [
      {
        path: "/button",
        name: "button",
        component:()=>import("@doc/button/button.md")
      },
    ],
  },
];
export default routers;
