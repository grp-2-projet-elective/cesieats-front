<template>
  <div id="restaurants-view" class="mt-3 mb-8">
    <v-container class="pr-0 pl-0">
      <v-row id="search-bars">
        <v-col sm="12" md="12" lg="3">
          <h2>Offres du moment</h2>
        </v-col>
        <v-col md="6" lg="4" >
          <v-text-field hide-details v-model="search.searchByCity" prepend-icon="mdi-magnify" placeholder="Ville..." single-line></v-text-field>
        </v-col>
        <v-col md="6" lg="4">
          <v-text-field hide-details v-model="search.searchByName" prepend-icon="mdi-magnify" placeholder="Restaurant..." single-line></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="12" lg="3">
          <v-card class="ma-auto" max-width="80%">
            <v-list>
              <v-list-item>Catégories :</v-list-item>
              <v-list-item-group multiple>
                <template v-for="(category, i) in categories">
                  <v-divider v-if="!category" :key="`divider-${i}`"></v-divider>
                  <v-list-item v-else :key="`item-${i}`" :value="category" active-class="text--accent-4">
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="category"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox :input-value="active" color="secondary accent-4"></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

        <v-col md="12" lg="9">
          <v-card v-for="restaurant in restaurantToDisplay" :key="restaurant.name"
            elevation="2" outlined class="restaurant-cards mb-5">
            <router-link :to="/restaurants/ + restaurant.id + '/' + nameForUrl(restaurant.name)" class="text-decoration-none">
              <v-row>
                <v-col sm="3">
                  <v-img :src="restaurant.image" :alt="restaurant.name" height="100%"/>
                </v-col>
                <v-col sm="9">
                  <div class="restaurant-theme">
                    <v-card-title>{{ restaurant.name }}</v-card-title>
                    <div class="categories">
                      <v-card-text v-for="category in restaurant.categories" :key="category">
                        {{ category }}
                      </v-card-text>
                    </div>
                  </div>
                  <v-card-subtitle class="text-justify">{{ restaurant.description }}</v-card-subtitle>
                  <div class="restaurant-infos">
                    <v-card-subtitle>{{ restaurant.location.city }} ({{ restaurant.location.zipCode }}), {{ restaurant.location.address }}</v-card-subtitle>
                    <div class="opening-hours">
                      <v-card-text>{{ restaurant.openingHours }}</v-card-text>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center" v-if="pageCount > 1">
        <v-pagination v-model="pagination.pageNumber" :length="pageCount" @input="nextPage"/>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RestaurantsView',
  data: () => ({
    search: {
      searchByCity: '',
      searchByName: ''
    },
    pagination: {
      pageNumber: 1,
      pageSize: 5
    },
    categories: [
      '',
      'Burger',
      'Chinois',
      'Japonais',
      'Pizza'
    ],
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
    ]
  }),
  methods: {
    nameForUrl (name) {
      return name.toLowerCase().normalize('NFD')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '-')
    },
    nextPage (page) {
      this.pagination.pageNumber = page
    }
  },
  computed: {
    pageCount () {
      const length = this.restaurants.length
      const size = this.pagination.pageSize
      return Math.ceil(length / size)
    },
    restaurantToDisplay () {
      const start = this.pagination.pageNumber * this.pagination.pageSize - this.pagination.pageSize
      const end = start + this.pagination.pageSize

      const paginatedRestaurants = this.restaurants.slice(start, end)
      const filteredByCity = paginatedRestaurants.filter(restaurant => {
        return restaurant.location.city.toLowerCase().includes(this.search.searchByCity.toLowerCase())
      })
      const filteredByName = filteredByCity.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(this.search.searchByName.toLowerCase())
      })

      return filteredByName
    }
  }
}
</script>

<style scoped>
@media (max-width: 1150px) {
  #restaurants-view #search-bars {
    margin: auto;
    width: 80%;
  }
}
#restaurants-view .restaurant-cards {
  max-width: 90%;
}
@media (max-width: 1264px) {
  #restaurants-view .restaurant-cards {
    max-width: 80%;
    margin: auto;
  }
}
#restaurants-view .restaurant-theme, #restaurants-view .restaurant-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#restaurants-view .restaurant-theme, #restaurants-view .restaurant-infos {
  margin-right: 20px;
}
#restaurants-view .categories {
  display: flex;
}
</style>
