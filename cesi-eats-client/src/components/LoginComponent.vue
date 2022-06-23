<template>
    <v-dialog
      v-model="connectionDialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          color="primary"
        >
          Connexion
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h4">Connexion</span>
        </v-card-title>
        <v-form
            v-model="validate"
            ref="form"
            @submit.prevent="newTaskFormSubmit"
            lazy-validation
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="user.mail"
                    :rules="emailRules"
                    label="E-mail"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="user.pwd"
                    :rules="passwordRules"
                    label="Mot de passe"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
            <v-col cols="12"><h4>Pas encore de compte ? <a href="/inscription"> Inscrivez-vous ici</a></h4></v-col>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="cancelButtonClick">
          Fermer
          </v-btn>
          <v-btn
            color="primary"
            class="mr-4"
            type="submit"
            @click="validate"
            >
            Se connecter
            </v-btn>
        </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  name: 'LoginComponent',
  data: () => ({
    emailRules: [
      v => !!v || 'Veuillez renseigner votre E-mail',
      v => /.+@.+/.test(v) || 'le format est incorrect'
    ],
    passwordRules: [
      v => !!v || 'Veuillez renseigner votre mot de passe'
    ],
    user: {
      mail: '',
      pwd: ''
    },
    connectionDialog: false,
    show1: false
  }),
  methods: {
    cancelButtonClick () {
      this.connectionDialog = false
      this.$refs.form.reset()
    },
    newTaskFormSubmit () {
      if (this.$refs.form.validate()) {
        this.$refs.form.reset()
        this.connectionDialog = false
      }
    }
  }
}
</script>
