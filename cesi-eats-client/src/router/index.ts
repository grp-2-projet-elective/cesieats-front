import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/roles/CustomerView.vue'
import RestaurantOwnerView from '../views/roles/RestaurantOwnerView.vue'
import DeliveryManView from '../views/roles/DeliveryManView.vue'
import RestaurantsView from '../views/shop/RestaurantsView.vue'
import HelpView from '../views/HelpView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/client',
    name: 'client',
    component: CustomerView
  },
  {
    path: '/restaurateur',
    name: 'restaurateur',
    component: RestaurantOwnerView
  },
  {
    path: '/livreur',
    name: 'livreur',
    component: DeliveryManView
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: RestaurantsView
  },
  {
    path: '/aide',
    name: 'aide',
    component: HelpView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
