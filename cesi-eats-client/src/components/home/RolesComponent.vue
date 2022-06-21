<template>
  <div id="roles">
    <v-container>
      <v-row>
        <v-col xs="12" sm="6" lg="4">
          <a href="/clients" title="Clients">
            <v-card class="role-cards">
              <v-img :src="require('@/assets/roles/customer.jpg')" alt="Clients" />
            </v-card>
            <h3>Utilisez notre application dès maintenant</h3>
          </a>
        </v-col>
        <v-col xs="12" sm="6" lg="4">
          <a href="/restaurateurs" title="Restaurateurs">
            <v-card class="role-cards">
              <v-img :src="require('@/assets/roles/restaurant-owner.jpg')" alt="Clients" />
            </v-card>
            <h3>Les plats de vos restaurants préférés, livrés chez vous</h3>
          </a>
        </v-col>
        <v-col xs="12" sm="6" lg="4">
          <a href="/restaurateurs" title="Restaurateurs">
            <v-card class="role-cards">
              <v-img :src="require('@/assets/roles/delivery-man.jpg')" alt="Clients" />
            </v-card>
            <h3>Livrez avec CESI Eats</h3>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'RolesComponent'
}
</script>

<style scoped>
#roles a {
  text-decoration: none;
  color: black;
}
#roles .role-cards {
  box-shadow: none;
  overflow: hidden;
}
#roles .role-cards div {
  transform: scale(1);
  transition: all 0.3s ease-in;
}
#roles a:hover .role-cards div {
  transform: scale(1.2);
}
</style>
