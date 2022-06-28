<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="5">
        <h1> Mon restaurant
          <v-dialog v-model="dialogs.restaurantDialog" max-width="80%">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-if="!restaurantExist" color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-plus
                </v-icon>
              </v-btn>
              <v-btn v-else color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                <v-icon>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h4">Gérer mon restaurant</span>
              </v-card-title>
              <v-form v-model="validate" ref="myRestaurantForm" @submit="restaurantSubmit">
                <v-container>
                  <v-card-title>
                    <span class="text-h6">Informations sur le restaurant</span>
                  </v-card-title>
                  <v-row>
                    <v-col cols="8" md="4">
                      <v-text-field v-model="restaurant.name" label="Nom du restaurant" />
                    </v-col>
                    <v-col cols="8" md="4">
                      <v-select v-model="restaurant.categories" :items="categories" label="Categorie(s)" multiple />
                    </v-col>
                    <v-col cols="4" md="2">
                      <v-text-field v-model="restaurant.openingHours" label="Heures d'ouverture"
                        hint="Xh - Xh / Xh - Xh" persistent-hint />
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-textarea v-model="restaurant.description" label="Description" />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="2" md="5">
                      <v-text-field v-model="restaurant.image" label="URL de l'image" />
                    </v-col>
                  </v-row>
                  <v-card-title>
                    <span class="text-h6 mt-5">Localisation du restaurant</span>
                  </v-card-title>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field v-model="restaurant.location.city" label="Ville" />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="restaurant.location.address" label="Adresse" />
                    </v-col>
                    <v-col cols="4" md="2">
                      <v-text-field v-model="restaurant.location.zipCode" label="Code postal" :rules="zipRules" />
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" @click="dialogs.restaurantDialog=false">
                    Fermer
                  </v-btn>
                  <v-btn color="primary" class="mr-4" type="submit" @click="restaurantSubmit">
                    Enregistrer
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </h1>
      </v-col>
    </v-row>
    <v-row v-if="!restaurantExist">
      <h2>Pas de restaurant</h2>
    </v-row>
    <v-row v-else id="restaurants-view">
      <v-col cols="12" md="3">
        <v-card elevation="2" outlined class="restaurant-cards mb-5">
          <v-row>
            <v-col cols="12" md="12">
              <v-img :src="restaurant.image" :alt="restaurant.name" height="100%" />
            </v-col>
            <v-col cols="12" md="12">
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
                <v-card-subtitle>{{ restaurant.location.city }} ({{ restaurant.location.zipCode }}), {{
                  restaurant.location.address }}</v-card-subtitle>
                <div class="opening-hours">
                  <v-card-text>{{ restaurant.openingHours }}</v-card-text>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="deleteRestaurant">Supprimer
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="12">
            <h1> Mes produits
              <v-dialog v-model="dialogs.productDialog" max-width="50%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h4">Ajouter un produit</span>
                  </v-card-title>
                  <v-form v-model="validate" ref="myProductForm" @submit="newProductSubmit">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="5">
                          <v-text-field v-model="newProduct.name" label="Intitulé du produit" />
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-textarea v-model="newProduct.description" label="Description du produit" />
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field v-model="newProduct.price" label="Prix du produit" type="number" />
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field v-model="newProduct.categories" label="Categorie(s)" multiple />
                        </v-col>
                        <v-col cols="8" md="8">
                          <v-text-field v-model="newProduct.image" label="URL de l'image" />
                        </v-col>
                        <v-col cols="8" md="8">
                          <v-checkbox v-model="newProduct.isOutOfStock" label="Rupture de stock ?"/>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" class="mr-4" @click="dialogs.productDialog=false">
                        Fermer
                      </v-btn>
                      <v-btn color="primary" class="mr-4" type="submit" @click="newProductSubmit">
                        Enregistrer
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </h1>
          </v-col>
          <v-col>
            <v-row class="mt-5" v-for="category in getAllCategories" :key="category">
              <v-col cols="12" md="12">
                <ProductsComponent :products="products" :category="category" :modif="modif" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <h1> Mes menus
              <v-dialog v-if="modif" v-model="dialogs.menuDialog" max-width="50%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h4">Créer un menu</span>
                  </v-card-title>
                  <v-form v-model="validate" ref="myRestaurantForm" @submit="connectionSubmit" lazy-validation>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="5">
                          <v-text-field v-model="newMenu.name" label="Intitulé du menu"/>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-textarea v-model="newMenu.description" label="Description du menu"/>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field v-model="newMenu.price" label="Prix du menu" type="number"/>
                        </v-col>
                        <v-col cols="8" md="8">
                          <v-text-field v-model="newMenu.image" label="URL de l'image"/>
                        </v-col>
                        <v-col cols="8" md="4">
                          <v-select v-model="newMenu.products" :items="getAllProducts" label="Produits" multiple/>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="error" @click="dialogs.menuDialog=false">
                        Fermer
                      </v-btn>
                      <v-btn color="primary" class="mr-4" type="submit" @click="validate">
                        Enregistrer
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </h1>
          </v-col>
          <v-col>
            <v-col cols="12" md="12">
              <MenusComponent :menus="menus" :modif="modif" :productsList="getAllProducts" />
            </v-col>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductsComponent from '@/components/shop/ProductsComponent.vue'
import MenusComponent from '@/components/shop/MenusComponent.vue'

export default {
  name: 'MyRestaurantView',
  components: {
    ProductsComponent,
    MenusComponent
  },
  data: () => ({
    modif: true,
    restaurantExist: true,
    dialogs: {
      productDialog: false,
      restaurantDialog: false,
      menuDialog: false
    },
    newProduct: {
      name: '',
      description: '',
      restaurantId: null,
      price: null,
      image: '',
      categories: [
      ],
      isOutOfStock: false
    },
    newMenu: {
      id: 0,
      name: '',
      description: '',
      products: [],
      restaurantId: null,
      price: null,
      image: ''
    },
    restaurant: {
      id: 2,
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
      }
    ],
    userID: '',
    categories: [
      'Japonais',
      'Healthy',
      'Burgers',
      'Pizzas'
    ],
    zipRules: [
      v => /[0-9].*$/.test(v) || 'Format incorrect'
    ]
  }),
  methods: {
    cancelButtonClick () {
      this.restaurantDialog = false
    },
    restaurantSubmit () {
      if (this.$refs.myRestaurantForm.validate()) {
        this.restaurantDialog = false
      }
    },
    deleteRestaurant () {
      this.restaurant.name = null
    },
    newProductSubmit () {
      this.myProductForm.visible = false
    }
  },
  mounted () {
    this.userID = this.$route.params.id
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
    },
    getAllProducts () {
      const productsList = []
      for (let i = 0; i < this.products.length; i++) {
        const productCategories = this.products[i].name
        if (!productsList.includes(productCategories[i])) {
          productsList.push(productCategories)
        }
      }
      return productsList
    }
  }
}
</script>

<style scoped>
#restaurants-view .restaurant-cards {
  max-width: 100%;
}
@media (max-width: 1264px) {
  #restaurants-view .restaurant-cards {
    max-width: 100%;
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
