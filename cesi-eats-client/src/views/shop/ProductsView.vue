<template>
  <div id="products-view" class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <h2>Notre sélection chez {{ restaurant.name }}</h2>
      <v-row class="mt-5">
        <MenusComponent v-if="checkMenusByRestaurant" :restaurant="restaurant" :menus="menus"/>
      </v-row>
      <v-row class="mt-5" v-for="category in getAllCategories" :key="category">
        <ProductsComponent v-if="checkProductsByRestaurant(category)" :restaurant="restaurant" :products="products" :category="category"/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MenusComponent from '@/components/shop/MenusComponent.vue'
import ProductsComponent from '@/components/shop/ProductsComponent.vue'

export default {
  name: 'ProductsView',
  components: {
    MenusComponent,
    ProductsComponent
  },
  data: () => ({
    restaurant: {},
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
    checkMenusByRestaurant () {
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].restaurantId === this.restaurant.id) {
          return true
        }
      }
      return false
    },
    checkProductsByRestaurant (category) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].categories.includes(category) && this.products[i].restaurantId === this.restaurant.id) {
          return true
        }
      }
      return false
    }
  },
  computed: {
    getAllCategories () {
      const categories = []
      for (let i = 0; i < this.products.length; i++) {
        const productCategories = this.products[i].categories
        for (let j = 0; j < productCategories.length; j++) {
          if (!categories.includes(productCategories[j])) {
            categories.push(productCategories[j])
          }
        }
      }
      return categories
    }
  },
  mounted () {
    this.restaurant = this.restaurants.find(r => r.id === parseInt(this.$route.params.id))
  }
}
</script>

<style scoped>

</style>
