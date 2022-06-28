<template>
  <div id="composants-view" class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <h2>Télécharger des composants</h2>
      <v-row class="mt-2">
        <v-col>
          <v-card outlined class="mx-auto mb-5">
            <v-card-subtitle class="text-center">
              Afin d'éditer les composants disponibles, vous pouvez les télécharger en vous rendant directement sur le
              <a href="https://github.com/grp-2-projet-elective/cesieats-front/tree/develop/cesi-eats-client/src/components" target="_blank" title="GitHub Front">
                dossier composants
              </a>
              dans le répertoire GitHub. Ou bien télécharger directement le ou les composants que vous souhaitez sur cette page contenant les principaux.
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-container class="pa-0">
        <v-layout wrap>
          <v-flex v-for="(component, idx) in components" :key="idx" xs12 md4>
            <a :href="'/components' + component.src + component.name + '.vue'" class="text-decoration-none" download>
              <v-card outlined>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>{{ component.name }}</v-list-item-title>
                    <v-list-item-icon>
                      <v-icon class="primary--text">mdi-download</v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-card>
            </a>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'ComposantsView',
  data: () => ({
    components: [
      { name: 'NavbarComponent', src: '/' },
      { name: 'MenuComponent', src: '/' },
      { name: 'FooterComponent', src: '/' },
      { name: 'CustomerOperation', src: '/roles/' },
      { name: 'RestaurantOwnerOperation', src: '/roles/' },
      { name: 'DeliveryManOperation', src: '/roles/' },
      { name: 'JoinUsComponent', src: '/roles/' }
    ]
  })
}
</script>

<style scoped>

</style>
