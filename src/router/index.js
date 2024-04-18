import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start.vue'
import BeforeHell from '@/views/BeforeHell.vue'
import FirstLevel from '@/views/FirstLevel.vue'
import SecondLevel from '@/views/SecondLevel.vue'
import ThirdLevel from '@/views/ThirdLevel.vue'

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
  },
  
  {
    path: '/second-level',
    name: 'SecondLevel',
    component: SecondLevel
  },

  {
    path: '/third-level',
    name: 'ThirdLevel',
    component: ThirdLevel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router