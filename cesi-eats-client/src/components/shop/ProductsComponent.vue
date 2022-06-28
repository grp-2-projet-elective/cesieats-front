<template>
  <div id="products-component">
    <v-container>
      <h3>{{ category }}</h3>
      <v-row>
        <v-col style="height: 410px;">
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group v-model="model" class="pa-4" multiple show-arrows>
              <v-slide-item v-for="(product, idx) in products.filter(product => product.restaurantId === restaurant._id && product.categories.includes(category))" :key="idx" v-slot="{ active, toggle }">
                <v-card outlined class="mx-auto" max-width="200">
                  <v-img :src="product.image" height="175px"/>
                  <v-card-title>{{ product.name }}</v-card-title>
                  <v-card-subtitle>{{ product.price }} €</v-card-subtitle>
                  <v-card-actions>
                    <v-btn text color="primary" @click="toggle">Découvrir</v-btn>
                    <v-spacer></v-spacer>
                    <div class="quantity-container">
                      <input v-model="product.quantity" type="number" class="quantity-input" placeholder="0" disabled/>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="actions-container">
                      <v-btn icon class="mr-1" @click="addToCart(product)">
                        <v-icon color="primary">mdi-plus-circle</v-icon>
                      </v-btn>
                      <v-btn icon class="mr-1" @click="removeFromCart(product)">
                        <v-icon color="primary">mdi-minus-circle</v-icon>
                      </v-btn>
                    </div>
                  </v-card-actions>
                  <v-expand-transition>
                    <v-card v-if="active ? reveal=true : reveal=false" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                      <v-card-title>{{ product.name }}</v-card-title>
                      <v-card-subtitle v-if="product.description" class="text-justify">{{ product.description.slice(0, 142) + '...' }}</v-card-subtitle>
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
export default {
  name: 'ProductsComponent',
  props: {
    restaurant: Object,
    products: Array,
    category: String
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
    }
  }
}
</script>

<style scoped>
#products-component .v-card--reveal {
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 1 !important;
}
#products-component .quantity-container {
  width: 30%;
}
#products-component .quantity-input {
  width: 100%;
  text-align: center;
  padding: 5px 10px;
  transform: translate(10px, -2px);
  outline: none;
}
#products-component .quantity-input::-webkit-inner-spin-button, #products-component .quantity-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
#products-component .quantity-input {
  -moz-appearance: textfield;
}
#products-component .actions-container {
  text-align: center;
}
</style>
