<template>
    <v-card id="menu-component" v-if="viewsAvailable[0].view !== 'Connexion'">
      <v-navigation-drawer
        app
        v-model="drawer"
        color="primary"
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
                <v-badge class="ml-1" v-if="view.view === 'Panier' && totalQuantity > 0" color="primary" :content="totalQuantity"></v-badge>
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
import $storeCart from '@/store/cart'

export default {
  props: {
    viewsAvailable: Array
  },
  data: () => ({
    drawer: true,
    miniVariant: true,
    expandOnHover: true,
    permanent: true,
    cart: $storeCart.state.cart
  }),
  computed: {
    totalQuantity () {
      let totalQuantity = 0
      for (const item of this.cart) {
        totalQuantity += item.quantity
      }
      return totalQuantity.toString()
    }
  }
}
</script>

<style scoped>
#menu-component {
  border-radius: 0;
}
#menu-component a {
  box-shadow: none;
  background: none;
}
#menu-component a::before {
  opacity: 0;
}
</style>
