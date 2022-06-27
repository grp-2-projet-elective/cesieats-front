<template>
  <div id="menus-component">
    <v-container>
      <h3>Menus</h3>
      <v-row>
        <v-col style="height: 375px;">
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(menu, idx) in menus.filter(menu => menu.restaurantId === restaurant.id)" :key="idx" v-slot="{ active, toggle }">
                <v-card outlined class="mx-auto" max-width="200">
                  <v-img :src="menu.image" height="175px"/>
                  <v-card-title>{{ menu.name }}</v-card-title>
                  <v-card-subtitle>{{ menu.price }} €</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text color="primary" @click="toggle">Découvrir</v-btn>
                    <v-spacer></v-spacer>
                    <div class="quantity-container">
                      <input class="quantity-input" type="number" :value="fetchQuantity(menu)" disabled/>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="actions-container">
                      <v-btn icon class="mr-1" @click="addToCart(menu)">
                        <v-icon color="primary">mdi-plus-circle</v-icon>
                      </v-btn>
                      <v-btn icon class="mr-1" @click="removeFromCart(menu)">
                        <v-icon color="primary">mdi-minus-circle</v-icon>
                      </v-btn>
                    </div>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card v-if="active ? reveal=true : reveal=false" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                      <v-card-title>{{ menu.name }}</v-card-title>
                      <v-card-subtitle>
                        {{ menu.description }}
                        <br/><br/>
                        Produits disponibles:
                        <ul v-for="product in productsFromMenu" :key="product.name">
                          <li>{{ product.name }}</li>
                        </ul>
                      </v-card-subtitle>
                      <v-card-actions class="pt-0">
                        <v-btn text color="primary" @click="toggle">Fermer</v-btn>
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
import { mapState } from 'vuex'

export default {
  name: 'MenusComponent',
  props: {
    restaurant: Object,
    menus: Array
  },
  data: () => ({
    model: [],
    reveal: false
  }),
  methods: {
    addToCart (item) {
      this.$store.commit('addToCart', item)
    },
    removeFromCart (item) {
      this.$store.commit('removeFromCart', item)
    },
    fetchQuantity (item) {
      const mp = this.cart.cart.find(mp => mp.id === item.id && mp.name === item.name)
      if (mp) {
        return mp.quantity
      }
      return 0
    }
  },
  computed: {
    productsFromMenu () {
      return [
        { name: '1' },
        { name: '2' },
        { name: '3' }
      ]
    },
    ...mapState([
      'cart'
    ])
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
#menus-component .quantity-container {
  width: 30%;
}
#menus-component .quantity-input {
  width: 100%;
  text-align: center;
  padding: 5px 10px;
  transform: translate(10px, -2px);
  outline: none;
}
#menus-component .quantity-input::-webkit-inner-spin-button, #menus-component .quantity-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#menus-component .quantity-input {
  -moz-appearance: textfield;
}
#menus-component .actions-container {
  text-align: center;
}
</style>
