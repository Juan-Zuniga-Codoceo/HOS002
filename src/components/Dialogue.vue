<template>
  <div class="text-center">
    <v-dialog
      width="500"
      :value="dialog"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Para ver los detalles del Héroe, inicia sesión
        </v-card-title>
            <Login/>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="close"
          >
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
export default {
    name: 'dialogue-comp',
    props: {
        dialog: {
            type:Boolean,
            required:true,
            
        },
    },
    data: function(){
        return {

        }
    },
    // computed: {},
    methods: {
        close(){
            this.$emit('close')
        }
    },
    // watch: {},
    components: {
        Login
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>
