<template>
  <v-app-bar app id="navbar-component">
    <v-btn text class="mr-4">
      <v-icon>mdi-menu</v-icon>
    </v-btn>

    <a href="/" class="d-flex align-center" title="Page d'accueil">
       <v-img :src="require('@/assets/logo.png')" alt="CESI Eats Logo"
         class="shrink mr-2"
         width="50"
         transition="scale-transition"
       />
       <h2>CESI Eats</h2>
     </a>

    <v-spacer></v-spacer>

    <span class="mr-5"><LoginComponent/></span>

    <v-checkbox v-model="$vuetify.theme.dark"
      class="pt-6"
      on-icon="mdi-theme-light-dark"
      off-icon="mdi-theme-light-dark"
    ></v-checkbox>
  </v-app-bar>
</template>

<script>
import LoginComponent from '@/components/LoginComponent'
export default {
  name: 'NavbarComponent',
  components: {
    LoginComponent
  }
}
</script>

<style scoped>
#navbar-component a {
  text-decoration: none;
}
</style>
