<template>
<div class="home">
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8">
                <div class="titulo">
                    <h1>Héroes</h1>
                        <div class="icons">
                            <v-icon class="icon">mdi-sword</v-icon>
                            <v-icon class="icon">mdi-shield</v-icon>
                            <v-icon class="icon">mdi-crosshairs</v-icon>
                            <v-icon class="icon">mdi-heart-plus</v-icon>
                            <v-icon class="icon">mdi-dna</v-icon>
                        </div>
                </div>
                <v-simple-table dark class="mt-5 table">
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                        Héroes
                        </th>
                        <th class="text-left">
                        Detalle
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="heroe in heroes"
                        :key="heroe.nombre"
                        >
                        <td><img :src="heroe.imagen" width="200" height="200" alt=""></td>
                        <td>
                            <v-btn @click="showInfo(heroe.nombre)">Ver detalles</v-btn>
                        </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <Dialogue @close='dialog=false' :dialog='dialog'/>
    </v-container>
</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Dialogue from '@/components/Dialogue.vue'
export default {
    name: 'heroes-view',
    // props: {},
    data: function(){
        return {
            dialog: false,
        }
    },
    computed: {
        ...mapState(['heroes'])
    },
    methods: {
        ...mapActions(['set_game', 'getHeroes']),
        showInfo(name){
            this.dialog=true
            this.set_game(name)
        }
    },
    // watch: {},
    components: {
        Dialogue
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.getHeroes()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .titulo{
        color:white;
    }
    .home{
        background: url('../assets/fondo1.jpg');
        background-size:100%;
        background-attachment: fixed;
        height: 100%;
    }
    .icon{
        padding: 0 10px;
        font-size: 40px;
        color:white;
    }
    .table{
        max-height: 70vh;
        overflow: auto;
    }
</style>