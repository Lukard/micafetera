import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/politica-de-cookies',
    name: 'Cookies',
    component: () => import('../views/Cookies.vue'),
  },
  {
    path: '/politica-de-privacidad',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
  },
  {
    path: '/aviso-legal',
    name: 'Legal',
    component: () => import('../views/Legal.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
