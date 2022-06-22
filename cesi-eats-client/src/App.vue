<template>
  <v-app>
    <v-main>
      <NavbarComponent/>
      <router-view/>
    </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script lang="typescript">
import Vue from 'vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default Vue.extend({
  name: 'App',
  components: {
    NavbarComponent,
    FooterComponent
  },
  data: () => ({
    //
  })
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
