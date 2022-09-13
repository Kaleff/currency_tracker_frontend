import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RatesView from '../views/RatesView.vue'

const routes = [
  {
    path: '/rates',
    name: 'rates',
    component: RatesView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
