<template>
  <div id="menus-component">
    <v-container>
      <h3>Menus</h3>
      <v-row>
        <v-col style="height: 350px;">
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(menu, idx) in menus" :key="idx" v-slot="{ active, toggle }">
                <v-card outlined class="mx-auto" max-width="200">
                  <v-img :src="menu.image" height="175px"/>
                  <v-card-title>{{ menu.name }}</v-card-title>
                  <v-card-subtitle>{{ menu.price }} €</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text color="primary" @click="toggle">En savoir plus</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon class="mr-1">
                      <v-icon color="primary">mdi-plus-circle</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card v-if="active ? reveal=true : reveal=false" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                      <v-card-title>{{ menu.name }}</v-card-title>
                      <v-card-subtitle>
                        {{ menu.description}}
                        <br/><br/>
                        Produits disponibles:
                        <ul v-for="product in productsFromMenu" :key="product">
                          <li>{{ product.name }}</li>
                        </ul>
                      </v-card-subtitle>
                      <v-card-actions class="pt-0">
                        <v-btn text color="primary" @click="toggle">Fermer</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon class="mr-1">
                          <v-icon color="primary">mdi-plus-circle</v-icon>
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expand-transition>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MenusComponent',
  props: {
    menus: Array
  },
  data: () => ({
    model: [],
    reveal: false
  }),
  computed: {
    productsFromMenu () {
      return [
        { name: '1' },
        { name: '2' },
        { name: '3' }
      ]
    }
  }
}
</script>

<style scoped>
#menus-component .v-card--reveal {
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 1 !important;
}
</style>
