import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import CyrillicHistory from '../views/CyrillicHistory.vue'
import CyrillicAlphabet from '../views/CyrillicAlphabet.vue'
import BasicSentences from '../views/BasicSentences.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: CyrillicHistory
  },
  { 
    path: '/cyrillic-alphabet',
    name: 'alphabet',
    component: CyrillicAlphabet
  },
  { 
    path: '/sentences',
    name: 'sentences',
    component: BasicSentences
  },
  {
    path: '/:any(.*)',
    component: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // scroll to top when navigating to a new route
    return { top: 0 }
  }
})

export default router
