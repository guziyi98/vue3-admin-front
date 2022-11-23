import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Layout from "@/layout/index.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => "@/views/dashboard/index.vue",
        meta: {
          title: "DashBoard" // 需要配置声明文件否则无提示
        }
      }
    ]
  }
]
export default createRouter({
  history: createWebHistory(),
  routes
})
