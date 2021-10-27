import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    people: []
  },
  mutations: {
    setPeople(state, people) {
      state.people = people
    }
  },
  actions: {
    getPeople(context) {
      axios("https://interview-api-luvkm7etwa-uc.a.run.app/people").then(data => {
        console.log(data.data[0]);
        context.commit('setPeople', data.data)
      })
    }
  },
  modules: {
  }
})
