<template>
    <v-dialog v-model="show" max-width="320">
        <v-card>
            <v-card-title class="text-h5">
                Etes-vous sûr ?
            </v-card-title>

            <v-card-text>
                <h4>Vous êtes sur le point de supprimer votre compte.</h4>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="green darken-1" text @click.stop="show=false">
                    Annuler
                </v-btn>

                <v-btn color="green darken-1" text @click.stop="show=false">
                    Continuer
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="typescript">

export default {
  name: 'DialogComponent',
  data: () => ({
  }),
  methods: {
  },
  props: ['visible'],
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>
