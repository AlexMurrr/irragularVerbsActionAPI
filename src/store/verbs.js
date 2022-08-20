import { createStore } from "vuex";

export const store = createStore({
  
  state (){ 
    return {
      verbForms: {
        0: ["be", "[быть, являться]", "['was, were']", "been"],
        1: ["beat", "[бить, колотить]", "beat", "beaten"],
        2: ["become", "становиться", "became", "become"],
      },

      rendArrFromVerbForms: [],  
    };
  },

  getters:{
  
    infinitive(state){
      return state.rendArrFromVerbForms[0];
    },

    translateState(state){
      return state.rendArrFromVerbForms[1];
    },
    pastSimpleState(state){
      return state.rendArrFromVerbForms[2];
    },
    pastParticipleState(state){
      return state.rendArrFromVerbForms[3];
    },
    

  },
  mutations: {
    rendomNumFromVerbs (state){
      state.rendArrFromVerbForms = state.verbForms[Math.floor(Math.random() *
        Object.keys(state.verbForms).length)]   
    }
  },
});
