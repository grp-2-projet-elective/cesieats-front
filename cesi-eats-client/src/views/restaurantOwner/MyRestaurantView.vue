<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="5">
        <h2>Mon restaurant
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
              <v-form v-model="validForm.restaurant" ref="restaurantForm" @submit="validateRestaurantSubmit">
                <v-container>
                  <v-card-title>
                    <span class="text-h6">Informations sur le restaurant</span>
                  </v-card-title>
                  <v-row>
                    <v-col cols="8" md="4">
                      <v-text-field v-model="restaurant.name" label="Nom du restaurant"/>
                    </v-col>
                    <v-col cols="8" md="4">
                      <v-select v-model="restaurant.categories" :items="categories" label="Categorie(s)" multiple/>
                    </v-col>
                    <v-col cols="4" md="2">
                      <v-text-field v-model="restaurant.openingHours" label="Heures d'ouverture" hint="Xh - Xh / Xh - Xh" persistent-hint/>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-textarea v-model="restaurant.description" label="Description"/>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="2" md="5">
                      <v-text-field v-model="restaurant.image" label="URL de l'image"/>
                    </v-col>
                  </v-row>
                  <v-card-title>
                    <span class="text-h6 mt-5">Localisation du restaurant</span>
                  </v-card-title>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-text-field v-model="restaurant.location.city" label="Ville"/>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="restaurant.location.address" label="Adresse"/>
                    </v-col>
                    <v-col cols="4" md="2">
                      <v-text-field v-model="restaurant.location.zipCode" label="Code postal"/>
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="dialogs.restaurantDialog=false">Fermer</v-btn>
                  <v-btn color="primary" class="mr-4" type="submit" @click="validateRestaurant" :disabled="!validForm.restaurant">Enregistrer</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </h2>
      </v-col>
    </v-row>
    <v-row v-if="!restaurantExist">
      <h2>Pas de restaurant</h2>
    </v-row>
    <v-row v-else id="my-restaurant-view">
      <v-col cols="12" md="3">
        <v-card elevation="2" outlined class="restaurant-cards mb-5">
          <v-row>
            <v-col cols="12" md="12">
              <v-img :src="restaurant.image" :alt="restaurant.name" height="100%"/>
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
            <h3>Mes produits
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
                  <v-form v-model="validForm.newProduct" ref="newProductForm" @submit="validateNewProductSubmit">
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="5">
                          <v-text-field v-model="newProduct.name" label="Intitulé du produit"/>
                        </v-col>
                        <v-col cols="12" md="12">
                          <v-textarea v-model="newProduct.description" label="Description du produit"/>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field v-model="newProduct.price" label="Prix du produit" type="number"/>
                        </v-col>
                        <v-col cols="12" md="4">
                          <v-text-field v-model="newProduct.categories" label="Categorie(s)" multiple/>
                        </v-col>
                        <v-col cols="8" md="8">
                          <v-text-field v-model="newProduct.image" label="URL de l'image"/>
                        </v-col>
                        <v-col cols="8" md="8">
                          <v-checkbox v-model="newProduct.isOutOfStock" label="Rupture de stock ?"/>
                        </v-col>
                      </v-row>
                    </v-container>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn class="mr-4" @click="dialogs.productDialog=false">Fermer</v-btn>
                      <v-btn color="primary" class="mr-4" type="submit" @click="validateNewProduct" :disabled="!validForm.newProduct">Enregistrer</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </h3>
          </v-col>
          <v-col>
            <v-row class="mt-5" v-for="category in getAllCategories" :key="category">
              <v-col cols="12" md="12">
                <ProductsComponent :products="products" :category="category" :modif="true"/>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <h3>Mes menus
              <v-dialog v-if="true" v-model="dialogs.menuDialog" max-width="50%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h4">Créer un menu</span>
                  </v-card-title>
                  <v-form v-model="validForm.newMenu" ref="newMenuForm" @submit="validateNewMenuSubmit">
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
                      <v-btn @click="dialogs.menuDialog=false">Fermer</v-btn>
                      <v-btn color="primary" class="mr-4" type="submit" @click="validateNewMenu" :disabled="!validForm.newMenu">Enregistrer</v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
            </h3>
          </v-col>
          <v-col>
            <v-col cols="12" md="12">
              <MenusComponent :menus="menus" :productsList="getAllProducts" :modif="true"/>
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
import $storeUser from '@/store/user'
import axios from 'axios'

export default {
  name: 'MyRestaurantView',
  components: {
    ProductsComponent,
    MenusComponent
  },
  data: () => ({
    userStore: $storeUser.state.user,
    restaurant: {},
    products: [],
    newProduct: {
      name: '',
      description: '',
      price: null,
      image: '',
      categories: [],
      isOutOfStock: false
    },
    menus: [],
    newMenu: {
      name: '',
      description: '',
      products: [],
      price: null,
      image: ''
    },
    categories: [],
    dialogs: {
      restaurantDialog: false,
      productDialog: false,
      menuDialog: false
    },
    validForm: {
      restaurant: false,
      newProduct: false,
      newMenu: false
    },
    rules: {}
  }),
  methods: {
    validateRestaurant () {
      return false
    },
    validateRestaurantSubmit () {
      if (this.validForm.restaurant) {
        this.$refs.restaurantForm.reset()
        this.dialogs.restaurantDialog = false
      }
    },
    validateNewProduct () {
      return false
    },
    validateNewProductSubmit () {
      if (this.validForm.newProduct) {
        this.$refs.newProductForm.reset()
        this.dialogs.productDialog = false
      }
    },
    validateNewMenu () {
      return false
    },
    validateNewMenuSubmit () {
      if (this.validForm.newMenu) {
        this.$refs.newMenuForm.reset()
        this.dialogs.restaurantDialog = false
      }
    },
    deleteRestaurant () {
      return null
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
#my-restaurant-view .restaurant-cards {
  max-width: 100%;
}
@media (max-width: 1264px) {
  #my-restaurant-view .restaurant-cards {
    max-width: 100%;
    margin: auto;
  }
}
#my-restaurant-view .restaurant-theme, #my-restaurant-view .restaurant-infos {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#my-restaurant-view .restaurant-theme, #my-restaurant-view .restaurant-infos {
  margin-right: 20px;
}
#my-restaurant-view .categories {
  display: flex;
}
</style>
