import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin.vue')
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
