import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/login/Login";
import Main from "@/views/main/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/main',
    name: 'Main',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
