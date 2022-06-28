<template>
    <!-- <v-row>
        <v-col sm="12" md="5">
            <h1> Mon profil
                <v-dialog v-model="dialog" max-width="80%">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h4">Modifier mon profil</span>
                        </v-card-title>
                        <v-form ref="registerForm" @submit.prevent="registerSubmit" lazy-validation>
                            <v-container>
                                <v-card-title>
                                    <span class="text-h6">Données personnelles</span>
                                </v-card-title>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.firstName" :rules="firstNameRules" label="Prénom*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.lastName" :rules="lastNameRules" label="Nom*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.mail" :rules="emailRules" label="E-mail*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.phone" :rules="phoneRules" label="Téléphone*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6" md="4">
                                        <v-text-field v-model="user.pwd" :rules="passwordRules" label="Mot de passe*"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-card-title>
                                    <span class="text-h6">Informations de livraison par défaut</span>
                                </v-card-title>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field v-model="user.city" label="Ville*" :rules="cityRules">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.address" label="Adresse*" :rules="addressRules">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="4" md="2">
                                        <v-text-field v-model="user.zipCode" label="Code postal*" :rules="zipRules">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="dialog=false">
                                    Fermer
                                </v-btn>
                                <v-btn @click.stop="confirmationDialog=true" color="error">
                                    <v-icon>mdi-delete</v-icon>
                                    Supprimer
                                    <ConfirmationDialogComponent :visible="confirmationDialog" @close="confirmationDialog=false"></ConfirmationDialogComponent>
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
    </v-row> -->
    <v-card max-width="95%" class="mx-auto mt-5">
        <v-card-title>
            <span class="text-h4">
                Mon profil
                <v-dialog v-model="dialog" max-width="80%">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" class="mx-2" fab small v-bind="attrs" v-on="on">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="text-h4">Modifier mon profil</span>
                        </v-card-title>
                        <v-form ref="registerForm" @submit.prevent="registerSubmit" lazy-validation>
                            <v-container>
                                <v-card-title>
                                    <span class="text-h6">Données personnelles</span>
                                </v-card-title>
                                <v-row>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.firstName" :rules="firstNameRules" label="Prénom*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.lastName" :rules="lastNameRules" label="Nom*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.mail" :rules="emailRules" label="E-mail*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.phone" :rules="phoneRules" label="Téléphone*">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="6" md="4">
                                        <v-text-field v-model="user.pwd" :rules="passwordRules" label="Mot de passe*"
                                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                            :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                                <v-card-title>
                                    <span class="text-h6">Informations de livraison par défaut</span>
                                </v-card-title>
                                <v-row>
                                    <v-col cols="12" md="4">
                                        <v-text-field v-model="user.city" label="Ville*" :rules="cityRules">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.address" label="Adresse*" :rules="addressRules">
                                        </v-text-field>
                                    </v-col>
                                    <v-col cols="4" md="2">
                                        <v-text-field v-model="user.zipCode" label="Code postal*" :rules="zipRules">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="dialog=false">
                                    Fermer
                                </v-btn>
                                <v-btn @click.stop="confirmationDialog=true" color="error">
                                    <v-icon>mdi-delete</v-icon>
                                    Supprimer
                                    <ConfirmationDialogComponent :visible="confirmationDialog"
                                        @close="confirmationDialog=false"></ConfirmationDialogComponent>
                                </v-btn>
                                <v-btn color="primary" class="mr-4" type="submit" @click="validate">
                                    Enregistrer
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
            </span>
        </v-card-title>
        <v-form ref="registerForm" @submit.prevent="registerSubmit" lazy-validation>
            <v-container>
                <v-card-title>
                    <span class="text-h6">Données personnelles</span>
                </v-card-title>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user.firstName" :rules="firstNameRules" label="Prénom*">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user.lastName" :rules="lastNameRules" label="Nom*">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user.mail" :rules="emailRules" label="E-mail*">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user.phone" :rules="phoneRules" label="Téléphone*">
                        </v-text-field>
                    </v-col>
                    <v-col cols="6" md="4">
                        <v-text-field v-model="user.pwd" :rules="passwordRules" label="Mot de passe*"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1">
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-card-title>
                    <span class="text-h6">Informations de livraison par défaut</span>
                </v-card-title>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="user.city" label="Ville*" :rules="cityRules">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-text-field v-model="user.address" label="Adresse*" :rules="addressRules">
                        </v-text-field>
                    </v-col>
                    <v-col cols="4" md="2">
                        <v-text-field v-model="user.zipCode" label="Code postal*" :rules="zipRules">
                        </v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-card>
</template>

<script lang="typescript">
import axios from 'axios'
import ConfirmationDialogComponent from '@/components/ConfirmationDialogComponent.vue'

export default {
  name: 'RegisterComponent',
  data: () => ({
    confirmationDialog: false,
    userID: null,
    dialog: false,
    firstNameRules: [
      v => !!v || 'Veuillez renseigner votre prénom'
    ],
    lastNameRules: [
      v => !!v || 'Veuillez renseigner votre nom'
    ],
    emailRules: [
      v => !!v || 'Veuillez renseigner votre E-mail',
      v => /.+@.+/.test(v) || 'le format est incorrect'
    ],
    passwordRules: [
      v => !!v || 'Veuillez renseigner votre mot de passe',
      v => /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(v) || 'Le mot de passe doit contenir au moins 8 caractères dont minimum 1 minuscule, 1 majuscule et 1 chiffre'
    ],
    roleRules: [
      v => !!v || 'Veuillez sélectionner votre rôle'
    ],
    phoneRules: [
      v => !!v || 'Veuillez renseigner votre numéro de téléphone',
      v => /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/.test(v) || 'Format incorrect (+33xx ou 0xx)'
    ],
    cityRules: [
      v => !!v || 'Veuillez renseigner votre ville'
    ],
    addressRules: [
      v => !!v || 'Veuillez renseigner votre addresse'
    ],
    zipRules: [
      v => !!v || 'Veuillez renseigner votre code postal',
      v => /[0-9].*$/.test(v) || 'Format incorrect'
    ],
    user: {
      mail: 'test@viacesi.fr',
      pwd: 'WreackingBall761',
      role: null,
      city: 'here',
      zipCode: '85600',
      address: 'azertyuiop',
      firstName: 'Vincent',
      lastName: 'Laclide',
      phone: '0781294099'
    },
    show1: false
  }),
  components: {
    ConfirmationDialogComponent
  },
  methods: {
  },
  mounted () {
    this.userID = this.$route.params.id
  }
}
</script>

<style scoped>
#v-card {
  margin-top: 20px;
}
</style>
