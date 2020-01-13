import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
  },
  {
    path: '/draw',
    name: 'draw',
    component: () => import('../views/MatchDraw.vue'),
  },
  {
    path: '/data',
    name: 'data',
    props: true,
    component: () => import('../views/Data.vue'),
  },
  {
    path: '/doc',
    name: 'doc',
    props: true,
    component: () => import('../views/Doc.vue'),
  },
  {
    path: '/matches',
    name: 'matches',
    props: true,
    component: () => import('../views/Matches.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
