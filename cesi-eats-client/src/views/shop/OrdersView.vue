<template>
  <div id="orders-view" class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <h2>Mes commandes</h2>
      <v-row class="mt-2">
        <v-col>
          <v-card outlined v-for="order in orders" :key="order.id" class="mx-auto mb-5">
            <v-row class="mt-1 mb-1">
              <v-col sm="3">
                <v-img class="ml-4" :src="order.restaurantId.image" :alt="order.name" height="100%"/>
              </v-col>
              <v-col sm="9">
                <div class="restaurant-theme">
                  <v-card-title>
                    {{ order.restaurantId.name }}
                  </v-card-title>
                  <div class="categories">
                    <v-card-text v-for="category in order.restaurantId.categories" :key="category">
                      {{ category }}
                    </v-card-text>
                  </div>
                </div>
                <div class="restaurant-infos">
                  <v-card-subtitle>{{ order.location.city }} ({{ order.location.zipCode }}), {{ order.location.address }}</v-card-subtitle>
                  <div class="opening-hours">
                    <v-card-text>{{ order.restaurantId.openingHours }}</v-card-text>
                  </div>
                </div>
                <v-card-actions>
                  <v-btn color="primary" text @click="show = !show">
                    Détails de la commande
                    <v-icon color="primary">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn :color="order.orderState === 'Confirmée' ? 'primary' : ''" text class="mr-4">
                    {{ order.orderState }}
                    <v-icon class="ml-1">mdi-check-circle</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                        <tr>
                          <th class="text-left">Nom</th>
                          <th class="text-center">Quantité</th>
                          <th class="text-center">Prix unitaire</th>
                          <th class="text-center">Prix total</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in order.menus.concat(order.products)" :key="item.item.id">
                            <td class="text-left">{{ item.item.name }}</td>
                            <td class="text-center">{{ item.quantity }}</td>
                            <td class="text-center">{{ item.item.price }} €</td>
                            <td class="text-center">{{ item.quantity * item.item.price }} €</td>
                          </tr>
                          <tr>
                            <td>Prix de la livraison</td>
                            <td colspan="2"></td>
                            <td class="text-center">{{ order.prices.deliveryPrice }} €</td>
                          </tr>
                          <tr>
                            <td class="font-weight-bold">Total</td>
                            <td colspan="2"></td>
                            <td class="font-weight-bold text-center">{{ order.prices.totalPrice }} €</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </v-expand-transition>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'OrdersView',
  data: () => ({
    show: false,
    restaurants: [
      {
        id: 0,
        name: 'Lorem Ipsum',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices fringilla justo, ut pellentesque diam pulvinar id. Sed pretium diam id elit mattis, sed vehicula dolor tempor. Sed sagittis arcu id orci commodo feugiat. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet euismod mi. Etiam condimentum magna sed nisi interdum, id fringilla nibh blandit. Nulla fringilla gravida mi at fermentum.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg',
        categories: ['Japonais', 'Healthy'],
        restaurantOwnersId: [42],
        openingHours: '9h - 12h / 14h - 19h',
        location: {
          city: 'Guérande',
          zipCode: '42024',
          address: '42 rue du Lorem',
          latitude: 42,
          longitude: 24
        }
      },
      {
        id: 1,
        name: 'Test rien à voir',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices fringilla justo, ut pellentesque diam pulvinar id. Sed pretium diam id elit mattis, sed vehicula dolor tempor. Sed sagittis arcu id orci commodo feugiat. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet euismod mi. Etiam condimentum magna sed nisi interdum, id fringilla nibh blandit. Nulla fringilla gravida mi at fermentum.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg',
        categories: ['Japonais', 'Healthy'],
        restaurantOwnersId: [42],
        openingHours: '9h - 12h / 14h - 19h',
        location: {
          city: 'Saint-Nazaire',
          zipCode: '42024',
          address: '42 rue du Lorem',
          latitude: 42,
          longitude: 24
        }
      }
    ],
    orders: [
      {
        id: 0,
        menus: [
          { item: 0, quantity: 1 },
          { item: 1, quantity: 2 }
        ],
        products: [
          { item: 1, quantity: 2 }
        ],
        restaurantId: 0,
        prices: {
          orderPrice: 27.3,
          deliveryPrice: 1.99,
          totalPrice: 29.29
        },
        date: '27 juin 2022',
        customerId: 0,
        orderState: 'Confirmée',
        location: {
          city: 'Saint-Nazaire',
          zipCode: 44600,
          address: '1 rue de test',
          latitude: 0,
          longitude: 0
        }
      },
      {
        id: 1,
        menus: [
          { item: 0, quantity: 1 },
          { item: 1, quantity: 2 }
        ],
        products: [
          { item: 1, quantity: 2 }
        ],
        restaurantId: 0,
        prices: {
          orderPrice: 27.3,
          deliveryPrice: 1.99,
          totalPrice: 29.29
        },
        date: '27 juin 2022',
        customerId: 0,
        orderState: 'Confirmée',
        location: {
          city: 'Saint-Nazaire',
          zipCode: 44600,
          address: '1 rue de test',
          latitude: 0,
          longitude: 0
        }
      }
    ],
    menus: [
      {
        id: 0,
        name: 'Maxi Best Of',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        products: [0, 1, 2],
        restaurantId: 0,
        price: 8.50,
        image: 'http://mcdorivedroite.com/wp-content/uploads/2017/02/layout_icon-1.png'
      },
      {
        id: 1,
        name: 'Best Of',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        products: [0, 1, 2],
        restaurantId: 1,
        price: 6.50,
        image: 'http://mcdorivedroite.com/wp-content/uploads/2017/02/layout_icon-1.png'
      },
      {
        id: 2,
        name: 'Best Of Other',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        products: [0, 1, 2],
        restaurantId: 1,
        price: 6.50,
        image: 'http://mcdorivedroite.com/wp-content/uploads/2017/02/layout_icon-1.png'
      }
    ],
    products: [
      {
        id: 0,
        name: 'Big Mac',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        restaurantId: 0,
        price: 7.50,
        image: 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt4e32a970bffd0792/61d866010f60435c58f20a0a/big-mac.png?auto=webp',
        categories: [
          'Burgers'
        ],
        isOutOfStock: false
      },
      {
        id: 1,
        name: 'Frite',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        restaurantId: 0,
        price: 2.90,
        image: 'https://eu-images.contentstack.com/v3/assets/blt5004e64d3579c43f/blt130eb8978cc923bf/615db7e9b084d018488c0a1e/3010.jpg?auto=webp',
        categories: [
          'Petites faim'
        ],
        isOutOfStock: false
      },
      {
        id: 2,
        name: 'Coca Cola',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        restaurantId: 0,
        price: 2.80,
        image: 'https://mltwiersgrjj.i.optimole.com/UjSS7Fo-BnCYV_UN/w:347/h:347/q:90/https://menumcdo.com/wp-content/uploads/2021/04/COCA.png',
        categories: [
          'Boissons'
        ],
        isOutOfStock: false
      }
    ]
  }),
  methods: {
    getRestaurant (order) {
      return this.restaurants.find(restaurant => restaurant.id === order.restaurantId)
    },
    getMenus (order) {
      return this.menus.find(menu => menu.id === order.item)
    },
    getProducts (order) {
      return this.products.find(product => product.id === order.item)
    }
  },
  mounted () {
    for (let i = 0; i < this.orders.length; i++) {
      // Restaurants
      this.orders[i].restaurantId = this.getRestaurant(this.orders[i])
      // Menus
      for (let j = 0; j < this.orders[i].menus.length; j++) {
        this.orders[i].menus[j].item = this.getMenus(this.orders[i].menus[j])
      }
      // Products
      for (let j = 0; j < this.orders[i].products.length; j++) {
        this.orders[i].products[j].item = this.getProducts(this.orders[i].products[j])
      }
    }
  }
}
</script>

<style scoped>
#orders-view .restaurant-theme, #orders-view .restaurant-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#orders-view .restaurant-theme, #orders-view .restaurant-infos {
  margin-right: 20px;
}
#orders-view .categories {
  display: flex;
}
</style>
