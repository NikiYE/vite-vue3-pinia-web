// router - intex.ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import helloRouter from './modules/helloRouter'
// append import
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/Home.vue"),
    children:[
      // append new router
      ...helloRouter,
    ]
  },
  {
      path: "/login",
      name: "login",
      component: () => import("../views/user/Login.vue")
  },
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router