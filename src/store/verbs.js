import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      verbForms: {
        0: ["be", "[быть, являться]", "['was, were']", "been"],
        1: ["beat", "[бить, колотить]", "beat", "beaten"],
        2: ["become", "становиться", "became", "become"],
      },
    };
  },
  getters:{
    rendArrFromVerbForms(state) {          
      return state.verbForms[Math.floor(Math.random() *
      Object.keys(state.verbForms).length)]
    },
  },
  mutations: {
   
  },
});
