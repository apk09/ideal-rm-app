import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VAR from '../views/VAR.vue'
import Backtesting from '../views/Backtesting.vue'
import Status from '../views/Status.vue'
import Configuration from '../views/Configuration.vue'
import ReportingLimit from '../views/ReportingLimit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/var',
    name: 'VAR',
    component: VAR
  },
  {
    path: '/',
    name: 'Backtesting',
    component: Backtesting
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/config',
    name: 'Configuration',
    component: Configuration
  },
  {
    path: '/reporting',
    name: 'ReportingLimit',
    component: ReportingLimit
  },
]

const router = new VueRouter({
  routes
})

export default router
