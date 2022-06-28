import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import CustomerView from '../views/roles/CustomerView.vue'
import RestaurantOwnerView from '../views/roles/RestaurantOwnerView.vue'
import DeliveryManView from '../views/roles/DeliveryManView.vue'
import RestaurantsView from '../views/shop/RestaurantsView.vue'
import ProductsView from '../views/shop/ProductsView.vue'
import HelpView from '../views/HelpView.vue'
import MyRestaurantView from '../views/restaurantOwner/MyRestaurantView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: RegisterView
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
    path: '/restaurants/:id/:name',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/aide',
    name: 'aide',
    component: HelpView
  },
  {
    path: '/mon-restaurant/:id/:name',
    name: 'restaurant',
    component: MyRestaurantView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
