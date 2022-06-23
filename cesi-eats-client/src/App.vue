<template>
  <v-app>
    <MenuComponent/>
    <v-main>
      <NavbarComponent style="z-index: 10;"/>
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
