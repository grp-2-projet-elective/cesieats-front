<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer" />
    <Topbar @drawerEvent="drawer = !drawer" />
    <MenuComponent style="z-index: 20;" :views-available="viewsAvailable"/>
    <v-main>
      <NavbarComponent style="z-index: 10;" :views-available="viewsAvailable"/>
      <router-view/>
    </v-main>
    <FooterComponent style="z-index: 30;"/>
  </v-app>
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
import $storeUser from '@/store/user'
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

export default Vue.extend({
  name: 'App',
  components: {
    MenuComponent,
    NavbarComponent,
    FooterComponent,
    Topbar,
    Sidebar
  },
  data: () => ({
    user: $storeUser.state.user,
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  computed: {
    viewsAvailable () {
      let viewsAvailable = []
      switch (this.user?.roleId) {
        case 1:
          viewsAvailable = [
            { isSetting: false, view: 'Restaurants', link: '/restaurants', mdi: 'mdi-silverware-fork-knife' },
            { isSetting: false, view: 'Panier', link: '/panier', mdi: 'mdi-cart' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Commandes', link: '/commandes', mdi: 'mdi-history' },
            { isSetting: true, view: 'Déconnexion', link: '/deconnexion', mdi: 'mdi-logout' }
          ]
          break
        case 2:
          viewsAvailable = [
            { isSetting: false, view: 'Mon restaurant', link: '/mon-restaurant', mdi: 'mdi-silverware-fork-knife' },
            { isSetting: false, view: 'Commandes', link: '/commandes', mdi: 'mdi-application-edit' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Statistiques', link: '/statistiques', mdi: 'mdi-chart-line' },
            { isSetting: true, view: 'Déconnexion', link: '/deconnexion', mdi: 'mdi-logout' }
          ]
          break
        case 3:
          viewsAvailable = [
            { isSetting: false, view: 'Livraisons', link: '/livraisons', mdi: 'mdi-bicycle' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Déconnexion', link: '/deconnexion', mdi: 'mdi-logout' }
          ]
          break
        case 4:
          viewsAvailable = [
            { isSetting: false, view: 'Comptes', link: '/comptes', mdi: 'mdi-account-multiple' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Statistiques', link: '/statistiques', mdi: 'mdi-chart-line' },
            { isSetting: true, view: 'Déconnexion', link: '/deconnexion', mdi: 'mdi-logout' }
          ]
          break
        case 5:
          viewsAvailable = [
            { isSetting: true, view: 'Logs', link: '/logs', mdi: 'mdi-archive-arrow-up' },
            { isSetting: true, view: 'Composants', link: '/composants', mdi: 'mdi-archive-arrow-up' },
            { isSetting: true, view: 'Déconnexion', link: '/deconnexion', mdi: 'mdi-logout' }
          ]
          break
        case 6:
          viewsAvailable = [
            { isSetting: true, view: 'Documentation', link: '/documentation', mdi: 'mdi-file-document-multiple' },
            { isSetting: true, view: 'Composants', link: '/composants', mdi: 'mdi-archive-arrow-up' },
            { isSetting: true, view: 'Déconnexion', link: '/deconnexion', mdi: 'mdi-logout' }
          ]
          break
        default:
          viewsAvailable = [
            { isSetting: false, view: 'Connexion', link: '/connexion', mdi: 'mdi-account' },
            { isSetting: true, view: 'Inscription', link: 'inscription', mdi: 'mdi-account-plus' }
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
