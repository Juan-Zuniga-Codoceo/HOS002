<template>
  <v-container>
    <v-row justify="center">
      <v-col md="5">
        <h2 class="text-center">Login</h2>

        <h3>user:test@test.cl pass:123456</h3>

        <v-form ref="form" v-model="valid">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Correo"
            required
          ></v-text-field>

          <v-text-field
            v-model="pass"
            :rules="passRules"
            label="Contraseña"
            required
            type="password"
          ></v-text-field>

          <v-btn :disabled="!valid" color="success" class="mr-4" @click="login"
            >Ingresar</v-btn
          >

          <v-btn @click="reset">Limpiar formulario</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>




<script>
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {mapState,mapActions} from 'vuex'
export default {
  name: "login-view",

  // props: {},

  data: function () {
    return {
      valid: true,

      pass: "",

      passRules: [
        (v) => !!v || "Contraseña es requerido",

        (v) =>
          (v && v.length <= 6) || "Contraseña deb tener al menos 6 caracteres",
      ],

      email: "",

      emailRules: [
        (v) => !!v || "Correo es requerido",

        (v) => /.+@.+\..+/.test(v) || "Correo debe ser valido",
      ],
    };
  },

  computed: {
    ...mapState (['game'])
  },

  methods: {
    ...mapActions(['set_usermail']),
    // login() {
    //   this.$refs.form.validate();

    //   if (this.valid == false) return;

    //   const auth = getAuth();

    //   signInWithEmailAndPassword(auth, this.email, this.pass)
    //     .then((userCredential) => {
    //       const user = userCredential.user;

    //       console.log(user);

    //       this.$router.push("/");
    //     })

    //     .catch((error) => {
    //       const errorMsg = error.message;

    //       console.log(errorMsg);
    //     });
    // },

    login(){
        this.$router.push(`/heroes/${this.game}`)
        this.set_usermail(this.email)
    },

    reset() {
      this.$refs.form.reset();
    },
  },

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