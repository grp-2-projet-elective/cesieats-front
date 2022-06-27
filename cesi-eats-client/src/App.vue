<template>
  <v-app>
    <MenuComponent style="z-index: 20;" :views-available="viewsAvailable"/>
    <v-main>
      <NavbarComponent style="z-index: 10;" :views-available="viewsAvailable"/>
      <router-view/>
    </v-main>
    <FooterComponent style="z-index: 30;"/>
  </v-app>
</template>

<script lang="typescript">
import Vue from 'vue'
import MenuComponent from '@/components/MenuComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default Vue.extend({
  name: 'App',
  components: {
    MenuComponent,
    NavbarComponent,
    FooterComponent
  },
  data: () => ({
    //
  }),
  computed: {
    viewsAvailable () {
      const userRole = 'CUSTOMER'
      let viewsAvailable = []

      switch (userRole) {
        case 'CUSTOMER':
          viewsAvailable = [
            { isSetting: false, view: 'Restaurants', link: '/restaurants', mdi: 'mdi-silverware-fork-knife' },
            { isSetting: false, view: 'Panier', link: '/panier', mdi: 'mdi-cart' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Historique', link: '/commandes', mdi: 'mdi-history' }
          ]
          break
        case 'RESTAURANT_OWNER':
          viewsAvailable = [
            { isSetting: false, view: 'Mon restaurant', link: '/mon-restaurant', mdi: 'mdi-silverware-fork-knife' },
            { isSetting: false, view: 'Commandes', link: '/commandes', mdi: 'mdi-application-edit' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Statistiques', link: '/statistiques', mdi: 'mdi-chart-line' }
          ]
          break
        case 'DELIVERY_MAN':
          viewsAvailable = [
            { isSetting: false, view: 'Livraisons', link: '/livraisons', mdi: 'mdi-bicycle' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' }
          ]
          break
        case 'COMMERCIAL_DEPARTMENT':
          viewsAvailable = [
            { isSetting: false, view: 'Comptes', link: '/comptes', mdi: 'mdi-account-multiple' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Statistiques', link: '/statistiques', mdi: 'mdi-chart-line' }
          ]
          break
        case 'TECHNICAL_DEPARTMENT':
          viewsAvailable = [
            { isSetting: true, view: 'Logs', link: '/logs', mdi: 'mdi-archive-arrow-up' },
            { isSetting: true, view: 'Composants', link: '/composants', mdi: 'mdi-archive-arrow-up' }
          ]
          break
        case 'EXTERNAL':
          viewsAvailable = [
            { isSetting: true, view: 'Composants', link: '/composants', mdi: 'mdi-archive-arrow-up' }
          ]
          break
        default:
          viewsAvailable = [
            { isSetting: false, view: 'Connexion', link: '/connexion', mdi: 'mdi-account' },
            { isSetting: false, view: 'Inscription', link: 'inscription', mdi: 'mdi-account-plus' }
          ]
      }

      return viewsAvailable
    }
  }
})
</script>

<style scoped>
* {
  font-family: "Candara Light", sans-serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "Candara", sans-serif;
}
</style>
