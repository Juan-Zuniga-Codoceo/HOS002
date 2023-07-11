<template>
  <v-container> 
    <h1>Bienvenido {{user_mail}}</h1>
    <v-row justify="center">
       
      <v-col cols="12" sm="4">
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src='heroe.imagen'
            height="200px"
          ></v-img>

          <v-card-title>{{heroe.nombre}}</v-card-title>

          <v-card-subtitle>Ataque: {{heroe.ataque}}</v-card-subtitle>
          <v-card-subtitle>Título: {{heroe.titulo}}</v-card-subtitle>
          <v-card-subtitle>Función: {{heroe.funcion}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters,mapState } from "vuex";
export default {
  name: "info-view",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {};
  },
  computed: {
    ...mapGetters(["getHeroByName"]),
    ...mapState(['user_mail']),
    heroe(){
        return this.getHeroByName(this.name)
    },

  },
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>