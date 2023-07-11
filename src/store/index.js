import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [],
    game: "",
    user_mail:'',
  },
  getters: {
    getHeroByName: (state) => (name) => {    return state.heroes.find(hero => hero.nombre === name)  }
  },
  mutations: {
    SET_GAME(state, game) {
      console.log(game)
      state.game = game
    },
    SET_HEROES (state, heroes){
      state.heroes=heroes
    },
    SET_USERMAIL (state,email){
      state.user_mail=email
    }
  },
  actions: {
    set_game({
      commit
    }, game) {
      commit('SET_GAME', game)

    },
    getHeroes({commit}) {

      const options = {
        method: 'GET',
        url: 'https://heroes0035-default-rtdb.firebaseio.com/heroes.json'
      };

      axios.request(options).then(function (response) {
        console.log(response.data);
        for (const key in response.data) {
          commit('SET_HEROES',response.data[key])
        }
      }).catch(function (error) {
        console.error(error);
      });
    },
    set_usermail({commit},email){
      commit('SET_USERMAIL',email)
    }
  },
  modules: {}
})