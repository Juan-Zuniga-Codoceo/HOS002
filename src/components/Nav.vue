<template>
    <div>
        <v-app-bar
        color="blue darken-4"
        dense
        dark
        >
        <div class="d-flex justify-center flex-grow-1">
            <v-btn color="light blue"
                elevation="2"
                rounded
                @click="$router.push('/')"
            >
            <v-icon left> mdi-home </v-icon>
            Home
            </v-btn>
        </div>
        </v-app-bar>
    </div>
</template>

<script>
export default {
  name: "nav-components",
  // props: {},
  data: function () {
    return {};
  },
  // computed: {},
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