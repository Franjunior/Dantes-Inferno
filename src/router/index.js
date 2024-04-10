import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/components/Start.vue'
import FirstLevel from '@/components/FirstLevel.vue'
import SecondLevel from '@/components/SecondLevel.vue'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },

  {
    path: '/first-level',
    name: 'FirstLevel',
    component: FirstLevel
  },

  {
    path: '/second-level',
    name: 'SecondLevel',
    component: SecondLevel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router