import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import CustomerView from '../views/roles/CustomerView.vue'
import RestaurantOwnerView from '../views/roles/RestaurantOwnerView.vue'
import DeliveryManView from '../views/roles/DeliveryManView.vue'
import RestaurantsView from '../views/shop/RestaurantsView.vue'
import MyRestaurantView from '../views/restaurantOwner/MyRestaurantView.vue'
import ProductsView from '../views/shop/ProductsView.vue'
import CartView from '../views/shop/CartView.vue'
import OrdersView from '../views/shop/OrdersView.vue'
import DeliveriesView from '../views/shop/DeliveriesView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import HelpView from '../views/HelpView.vue'
import LegalNoticeView from '../views/mandatory/LegalNoticeView.vue'
import TOUView from '../views/mandatory/TOUView.vue'
import GTCView from '../views/mandatory/GTCView.vue'
import PrivacyPolicyView from '../views/mandatory/PrivacyPolicyView.vue'
import ProfileView from '../views/ProfileView.vue'
import AccountsView from '../views/commercial/AccountsView.vue'

import $storeUser from '@/store/user'

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
    path: '/profil',
    name: 'profile',
    component: ProfileView
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
    path: '/restaurants/:name/:id',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/mon-restaurant',
    name: 'mon-restaurant',
    component: MyRestaurantView
  },
  {
    path: '/panier',
    name: 'panier',
    component: CartView
  },
  {
    path: '/commandes',
    name: 'commandes',
    component: OrdersView
  },
  {
    path: '/livraisons',
    name: 'livraisons',
    component: DeliveriesView,
    beforeEnter: livraisonGuard
  },
  {
    path: '/composants',
    name: 'composants',
    component: ComponentsView
  },
  {
    path: '/aide',
    name: 'aide',
    component: HelpView
  },
  {
    path: '/mentions-legales',
    name: 'mentions-legales',
    component: LegalNoticeView
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: TOUView
  },
  {
    path: '/cgv',
    name: 'cgv',
    component: GTCView
  },
  {
    path: '/politique-confidentialite',
    name: 'politique-confidentialite',
    component: PrivacyPolicyView
  },
  {
    path: '/comptes',
    name: 'clientsAccounts',
    component: AccountsView
  }
]

function livraisonGuard (to, from, next) {
  if ($storeUser.state.user?.roleId === 3) return next()
  next('/')
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
