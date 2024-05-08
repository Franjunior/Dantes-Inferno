import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/views/Start.vue'
import BeforeHell from '@/views/BeforeHell.vue'
import FirstLevel from '@/views/FirstLevel.vue'
import SecondLevel from '@/views/SecondLevel.vue'
import ThirdLevel from '@/views/ThirdLevel.vue'
import FourthLevel from '@/views/FourthLevel.vue'
import FifthLevel from '@/views/FifthLevel.vue'
import SixthLevel from '@/views/SixthLevel.vue'
import SeventhLevel from '@/views/SeventhLevel.vue'
import EighthLevel from '@/views/EighthLevel.vue'
import NinthLevel from '@/views/NinthLevel.vue'
import AfterHell from '@/views/AfterHell.vue'

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
  },

  {
    path: '/fourth-level',
    name: 'FourthLevel',
    component: FourthLevel
  }
  ,

  {
    path: '/fifth-level',
    name: 'FifthLevel',
    component: FifthLevel
  }
  ,

  {
    path: '/sixth-level',
    name: 'SixthLevel',
    component: SixthLevel
  }
  ,

  {
    path: '/seventh-level',
    name: 'SeventhLevel',
    component: SeventhLevel
  }
  ,

  {
    path: '/eighth-level',
    name: 'EighthLevel',
    component: EighthLevel
  }
  ,

  {
    path: '/ninth-level',
    name: 'NinthLevel',
    component: NinthLevel
  }
  ,

  {
    path: '/after-hell',
    name: 'AfterHell',
    component: AfterHell
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router