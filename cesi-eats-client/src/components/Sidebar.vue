<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img
      height="140"
      class="pa-4"
      src=""
    >
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img
            aspect-ratio="30"
            src="https://www.pngkey.com/png/detail/933-9334152_small-g-suite-admin-logo.png"
          />
        </v-avatar>
        <h2 class="">ADMIN PANEL</h2>
      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text] in links" :key="icon" link>
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar-view",

  data() {
    return {
      links: [
        ["mdi-microsoft-windows", "Tableau de bord"],
        ["mdi-account", "Profil"],
        ["mdi-clipboard-list-outline", "Produits"],
        ["mdi-card-account-details-outline", "Commandes"],
        ["mdi-cog", "Paramètres"],
      ],
    };
  },
};
</script>

<style scoped></style>