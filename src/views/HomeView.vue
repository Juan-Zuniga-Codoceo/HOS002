<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6">
          <div class="box text-center pa-5">
            <h1>Desafía las expectativas de los MOBA</h1>
            <p>Épicos héroes y acción sin cesar en múltiples campos de batalla</p>
            <v-btn
            color="orange darken-3"
            dark
            @click="$router.push('/heroes')"
            >VER HEROES</v-btn>
          </div>

        </v-col>
      </v-row>
    </v-container>
    <v-alert
      border="left"
      color="purple darken-1"
      dark
      class="py-10 mt-16"
    >
      ¡Te damos la bienvenida al Nexo! ¡En este reino entre reinos, todo es posible! Elige entre decenas de héroes legendarios de todo el panteón de Blizzard, personaliza sus talentos y habilidades en medio del combate y lucha en una infinidad de campos de batalla que redefinen el género. ¡Esto no es un MOBA promedio, eso es Heroes of th Storm!
    </v-alert>
  </div>
</template>

<script>
  

  export default {
    name: 'Home-view',

    components: {
      
    },
  }
</script>
<style scoped>
  .home{
    background:linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('../assets/fondo3.jpg');
    background-size:100%;
    background-attachment: fixed;
    height: 100%;
  }
  .box{
    border:2px solid white;
    margin-top: 100px;
    color:white;
  }
</style>
