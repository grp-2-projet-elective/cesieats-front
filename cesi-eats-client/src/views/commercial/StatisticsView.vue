<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <h3>Tableau de bord</h3>
    </v-subheader>
    <br>
    <v-row>
      <v-col lg="7" cols="12">
        <v-row>
          <v-col lg="6" cols="12" v-for="(item,index) in activityLog" :key="index">
            <v-card elevation="2" class="rounded-lg">
              <v-card-text class="d-flex justify-space-between align-center">
                <div>
                  <strong>{{ item.title }}</strong> <br>
                  <span>Les 3 dernière semaines</span>
                </div>
                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                  <span style="color: white">{{item.amount}} +</span>
                </v-avatar>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="5">
        <v-card>
          <v-card-title>Activités</v-card-title>
          <v-card-text class="py-0">
            <v-timeline align-top dense>
              <v-timeline-item color="indigo" small>
                <strong>Il y a 5 minutes</strong>
                <div class="text-caption">
                  Vous avez une nouvelle commande, allez voir!
                </div>
              </v-timeline-item>
              <v-timeline-item color="green" small>
                <strong>Il y a 35 minutes</strong>
                <div class="text-caption mb-2">
                  Un produits a été livré
                </div>
              </v-timeline-item>
              <v-timeline-item color="indigo" small>
                <strong>Il y a 44 minutes</strong>
                <div class="text-caption">
                  Vous avez une nouvelle commande, allez voir!
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-data-table caption="Listes des commandes en attentes" class="elevation-1"
            :headers="headers" :items="desserts" :items-per-page="5">
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'StatisticsView',
  data () {
    return {
      cards: ['Today', 'Yesterday'],
      activityLog: [
        { title: 'Produits total', amount: 50, icon: 'mdi-account', color: 'cyan lighten-3' },
        { title: 'Clients total', amount: 3433, icon: 'mdi-account-group-outline', color: 'green darken-2' },
        { title: 'Total des ventes', amount: 3433, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1' },
        {
          title: 'Commandes en attente',
          amount: 3433,
          icon: 'mdi-account-group-outline',
          color: 'deep-orange darken-1'
        }
      ],
      headers: [
        {
          text: 'Restaurants',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Menu', value: 'menu' },
        { text: 'Date', value: 'date' },
        { text: 'Heure de la commande', value: 'heure' },
        { text: 'Moyen de paiement', value: 'paiement' },
        { text: 'Livreur', value: 'livreur' },
        { text: 'Client', value: 'client' }

      ],
      desserts: [
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '20/06/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'TotoSushis',
          menu: 'SushisBox 25+',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Apple pay',
          livreur: 'Mohammed',
          client: 'Félicien fouillet'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        },
        {
          name: 'McDonalds',
          menu: 'Best off',
          date: '23/07/2022',
          heure: '6pm',
          paiement: 'Par carte',
          livreur: 'Amine',
          client: 'Billy'
        }
      ]
    }
  },
  methods: {
    onButtonClick (item) {
      console.log('click on ' + item.no)
    }
  }
}
</script>

<style scoped>
.overlap-icon {
  position: absolute;
  top: -33px;
  text-align: center;
  padding-top: 12px;
}
</style>
