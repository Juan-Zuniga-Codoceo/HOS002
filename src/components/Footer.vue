<template>
    <v-footer
    color="blue darken-4"
    padless
    >
        <v-row
        justify="center"
        no-gutters
        >
            <v-col
                class="blue darken-4 py-4 text-center white--text"
                cols="12"
            >
                <strong>Bienvenido a Vuetify</strong> — {{ new Date().getFullYear() }} 
            </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
    name: 'footer-components',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>