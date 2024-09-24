import { createRouter, createWebHistory } from 'vue-router'
import TopPage from './components/TopPage.vue'
import WorkWeb1 from './components/WorkWeb1.vue'
import WorkWeb2 from './components/WorkWeb2.vue'
import WorkWeb3 from './components/WorkWeb3.vue'
import WorkWeb4 from './components/WorkWeb4.vue'
import WorkWeb5 from './components/WorkWeb5.vue'
import WorkWeb6 from './components/WorkWeb6.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router