<template>
  <v-footer padless id="footer-component" class="mt-3">
    <v-card class="primary lighten-1 white--text text-center">
      <v-container>
        <v-row>
          <v-col id="logo" sm="12" md="6">
            <a href="/" class="d-flex align-center" title="Page d'accueil">
              <v-img :src="require('@/assets/black-logo.png')" alt="CESI Eats Logo"
                     class="shrink mr-2"
                     width="50"
                     transition="scale-transition"
              />
              <h2>CESI Eats</h2>
            </a>
          </v-col>
          <v-col id="links" sm="12" md="6">
            <v-btn text href="/aide">
              <span class="mr-2">Obtenir de l'aide</span>
            </v-btn>
            <v-btn text href="/client">
              <span class="mr-2">Créer un compte</span>
            </v-btn>
            <v-btn text href="/restaurateur">
              <span class="mr-2">Ajouter un restaurant</span>
            </v-btn>
            <v-btn text href="/livreur">
              <span class="mr-2">Devenez coursier-partenaire</span>
            </v-btn>
            <v-btn text href="/">
              <span class="mr-2">À propos de CESI Eats</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-divider></v-divider>

      <v-card-text class="white--text pb-0">
        <strong>CESI Eats</strong> - {{ new Date().getFullYear() }}
      </v-card-text>
      <v-card-text class="pt-0">
        <v-btn icon
               v-for="icon in icons"
               :key="icon"
               class="mx-4 white--text"
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  })
}
</script>

<style scoped>
#footer-component div {
  width: 100%;
}
#footer-component a {
  text-decoration: none;
}
#logo {
  display: flex;
  justify-content: center;
}
#logo h2 {
  color: black;
}
#links {
  display: block;
}
</style>
