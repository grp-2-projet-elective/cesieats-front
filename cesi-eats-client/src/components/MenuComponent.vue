<template>
    <v-card id="menu-component" v-if="viewsAvailable[0].view !== 'Connexion'" style="border-radius: 0;">
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
  props: {
    viewsAvailable: Array
  },
  data () {
    return {
      drawer: true,
      color: 'primary',
      miniVariant: true,
      expandOnHover: true,
      permanent: true
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
