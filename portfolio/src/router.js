import { createRouter, createWebHistory } from 'vue-router'
import TopPage from './components/TopPage.vue'
import WorkWeb1 from './components/WorkWeb1.vue'
import WorkWeb2 from './components/WorkWeb2.vue'
import WorkWeb3 from './components/WorkWeb3.vue'
import WorkWeb4 from './components/WorkWeb4.vue'
import WorkWeb5 from './components/WorkWeb5.vue'
import WorkWeb6 from './components/WorkWeb6.vue'
import WorkWeb7 from './components/WorkWeb7.vue'
import WorkWeb8 from './components/WorkWeb8.vue'
import WorkWeb9 from './components/WorkWeb9.vue'
import WorkWeb10 from './components/WorkWeb10.vue'

const routes = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage
  },
  {
    path: '/web1',
    name: 'WorkWeb1',
    component: WorkWeb1
  },
  {
    path: '/web2',
    name: 'WorkWeb2',
    component: WorkWeb2
  },
  {
    path: '/web3',
    name: 'WorkWeb3',
    component: WorkWeb3
  },
  {
    path: '/web4',
    name: 'WorkWeb4',
    component: WorkWeb4
  },
  {
    path: '/web5',
    name: 'WorkWeb5',
    component: WorkWeb5
  },
  {
    path: '/web6',
    name: 'WorkWeb6',
    component: WorkWeb6
  },
  {
    path: '/web7',
    name: 'WorkWeb7',
    component: WorkWeb7
  },
  {
    path: '/web8',
    name: 'WorkWeb8',
    component: WorkWeb8
  },
  {
    path: '/web9',
    name: 'WorkWeb9',
    component: WorkWeb9
  },
  {
    path: '/web10',
    name: 'WorkWeb10',
    component: WorkWeb10
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router