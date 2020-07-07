import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../components/home/Home.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/about',
    name: 'About',
    component: () => import('../components/about/About.vue')
}];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router