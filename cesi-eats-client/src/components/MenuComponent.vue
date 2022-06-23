<template>
    <v-card id="menu-component" style="border-radius: 0; z-index: 20;">
      <v-navigation-drawer
        app
        v-model="drawer"
        :color="color"
        :expand-on-hover="expandOnHover"
        :mini-variant="miniVariant"
        :permanent="permanent"
        dark
      >
        <v-list dense class="py-0">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar class="ml-2">
              <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Avatar">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>NOM Prénom</v-list-item-title>
              <v-list-item-subtitle>prenom.nom@viace.fr</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-btn link v-for="view in viewsAvailable" :key="view.view" :to="view.link">
            <v-list-item link style="width: 223px;padding-left: 2px;">
                <v-icon class="mr-5">{{ view.mdi }}</v-icon>
                {{ view.view }}
            </v-list-item>
          </v-btn>
          <v-list-item>
            <v-checkbox v-model="$vuetify.theme.dark"
              class="ml-1"
              color="white"
              on-icon="mdi-theme-light-dark"
              off-icon="mdi-theme-light-dark"
            >
            </v-checkbox>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      color: 'primary',
      miniVariant: true,
      expandOnHover: true,
      permanent: true
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
#menu-component a {
  box-shadow: none;
  background: none;
}
#menu-component a::before {
  opacity: 0;
}
</style>
