<template>
  <v-app-bar app id="navbar-component">
    <a href="/" class="d-flex align-center" title="Page d'accueil">
       <v-img :src="require('@/assets/logo.png')" alt="CESI Eats Logo"
         class="shrink mr-2"
         width="50"
         transition="scale-transition"
       />
       <h2>CESI Eats</h2>
     </a>

    <v-spacer></v-spacer>

    <v-btn class="reponsive-navbar" link v-for="view in viewsAvailable.filter(view => !view.isSetting)" :key="view.view" :to="view.link">
      <v-icon v-if="view.mdi" class="mr-1">{{ view.mdi }}</v-icon>
      <span class="mr-1">{{ view.view }}</span>
    </v-btn>

    <div class="reponsive-navbar">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs">
            <v-icon>mdi-cog</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="view in viewsAvailable.filter(view => view.isSetting)" :key="view.view">
            <v-btn :href="view.link" style="width: 100%; background: none;box-shadow: none;border-bottom: 1px solid black;border-radius: 0;">
              <v-list-item-title>
                <v-icon v-if="view.mdi" class="mr-1">{{ view.mdi }}</v-icon>
                <span class="mr-1">{{ view.view }}</span>
              </v-list-item-title>
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-checkbox v-model="$vuetify.theme.dark"
              class="pt-4 ma-auto"
              on-icon="mdi-theme-light-dark"
              off-icon="mdi-theme-light-dark"
            >
            </v-checkbox>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import LoginComponent from '@/components/LoginComponent'
export default {
  name: 'NavbarComponent',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' }
      ],
      mini: true
    }
  },
  computed: {
    viewsAvailable () {
      const userRole = 'RESTAURANT_OWNER'
      let viewsAvailable = []

      switch (userRole) {
        case 'CUSTOMER':
          viewsAvailable = [
            { isSetting: false, view: 'Restaurants', link: '/restaurants', mdi: 'mdi-silverware-fork-knife' },
            { isSetting: false, view: 'Panier', link: '/panier', mdi: 'mdi-cart' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Historique', link: '/historique', mdi: 'mdi-history' },
            { isSetting: true, view: 'Parrainage', link: '/parrainage', mdi: 'mdi-account-multiple-check' }
          ]
          break
        case 'RESTAURANT_OWNER':
          viewsAvailable = [
            { isSetting: false, view: 'Mon restaurant', link: '/mon-restaurant', mdi: 'mdi-silverware-fork-knife' },
            { isSetting: false, view: 'Commandes', link: '/commandes', mdi: 'mdi-application-edit' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Historique', link: '/historique', mdi: 'mdi-history' },
            { isSetting: true, view: 'Statistiques', link: '/statistiques', mdi: 'mdi-chart-line' },
            { isSetting: true, view: 'Parrainage', link: '/parrainage', mdi: 'mdi-account-multiple-check' }
          ]
          break
        case 'DELIVERY_MAN':
          viewsAvailable = [
            { isSetting: false, view: 'Livraisons', link: '/livraisons', mdi: 'mdi-bicycle' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Historique', link: '/historique', mdi: 'mdi-history' },
            { isSetting: true, view: 'Parrainage', link: '/parrainage', mdi: 'mdi-account-multiple-check' }
          ]
          break
        case 'TECHNICAL_DEPARTMENT':
        case 'COMERCIAL_DEPARTMENT':
          viewsAvailable = [
            { isSetting: false, view: 'Comptes', link: '/comptes', mdi: 'mdi-account-multiple' },
            { isSetting: true, view: 'Profil', link: '/profil', mdi: 'mdi-account-wrench' },
            { isSetting: true, view: 'Logs', link: '/logs', mdi: 'mdi-archive-arrow-up' },
            { isSetting: true, view: 'Statistiques', link: '/statistiques', mdi: 'mdi-chart-line' },
            { isSetting: true, view: 'Parrainage', link: '/parrainage', mdi: 'mdi-account-multiple-check' }
          ]
          break
        case 'EXTERNAL':
          break
        default:
          viewsAvailable = [
            { isSetting: false, view: 'Connexion', link: 'connexion', mdi: 'mdi-account' },
            { isSetting: false, view: 'Inscription', link: 'inscription', mdi: 'mdi-account-plus' }
          ]
      }

      return viewsAvailable
    }
  }
}
</script>

<style scoped>
#navbar-component a {
  text-decoration: none;
  box-shadow: none;
}
#navbar-component a::before {
  opacity: 0;
}
#navbar-component a:hover {
 opacity: 0.6;
}
@media (max-width: 700px) {
  #navbar-component .reponsive-navbar {
    display: none;
  }
}
</style>
