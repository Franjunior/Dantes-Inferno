import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start.vue'
import BeforeHell from '@/views/BeforeHell.vue'
import FirstLevel from '@/views/FirstLevel.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },

  {
    path: '/before-hell',
    name: 'BeforeHell',
    component: BeforeHell
  },

  {
    path: '/first-level',
    name: 'FirstLevel',
    component: FirstLevel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router