import { createStore } from "vuex";

export const store = createStore({
  
  state (){ 
    return {
        count: 0,
    }
      
  },

  getters:{  
    getName(state){
        return state.name
    }
  },
  mutations: {
    increment (state) {
        state.count++
      }
  },
});