<template>
  <div id="menus-component">
    <v-container>
      <h3>Menus</h3>
      <v-row>
        <v-col style="height: 410px;">
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(menu, idx) in menus.filter(menu => menu.restaurantId === restaurant._id)" :key="idx" v-slot="{ active, toggle }">
                <v-card outlined class="mx-auto" max-width="200">
                  <v-img :src="menu.image" height="175px"/>
                  <v-card-title>
                    {{ menu.name }}
                  </v-card-title>
                  <v-card-subtitle>{{ menu.price }} €</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text color="primary" @click="toggle">Découvrir</v-btn>
                    <v-spacer></v-spacer>
                    
                    <v-btn v-if="!modif" icon class="mr-1">
                      <v-icon color="primary">mdi-plus-circle</v-icon>
                    </v-btn>
                    <v-btn v-else icon class="mr-1">
                      <v-dialog v-model="dialog" max-width="50%">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn color="primary" class="mx-2" icon fab small v-bind="attrs" v-on="on">
                            <v-icon>mdi-pencil</v-icon>
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span class="text-h4">{{menu.name}}</span>
                          </v-card-title>
                          <v-form v-model="validate" ref="myRestaurantForm" @submit="connectionSubmit">
                            <v-container>
                              <v-row>
                                <v-col cols="12" md="5">
                                  <v-text-field v-model="menu.name" label="Intitulé du menu"/>
                                </v-col>
                                <v-col cols="12" md="12">
                                  <v-textarea v-model="menu.description" label="Description du menu"/>
                                </v-col>
                                <v-col cols="12" md="4">
                                  <v-text-field v-model="menu.price" label="Prix du menu" type="number"/>
                                </v-col>
                                <v-col cols="8" md="8">
                                  <v-text-field v-model="menu.image" label="URL du menu"/>
                                </v-col>
                                <v-col cols="8" md="4">
                                  <v-select v-model="menu.products" :items="productsList" label="Produits" multiple/>
                                </v-col>
                              </v-row>
                            </v-container>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn @click="dialog=false">
                                Fermer
                              </v-btn>
                              <v-btn @click="cancelButtonClick" color="error">
                                <v-icon>mdi-delete</v-icon>
                                  Supprimer
                              </v-btn>
                              <v-btn color="primary" class="mr-4" type="submit" @click="validate">
                                Enregistrer
                              </v-btn>
                            </v-card-actions>
                          </v-form>
                        </v-card>
                      </v-dialog>
                    </v-btn>
                    
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
                      <v-card-subtitle class="text-justify">
                        <p v-if="menu.description">{{ menu.description.slice(0, 142) + '...' }}</p>
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
    menus: Array,
    modif: Boolean,
    productsList: Array

    restaurant: Object,
    menus: Array
  },
  data: () => ({
    model: [],
    reveal: false,
    dialog: false
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
