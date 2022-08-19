<template>
  <div>
    <rendom-verb /> 

    {{count}}

    </div>
    {{verbArr[0]}}
</template>

<script>
import rendomVerb from "./components/rendomVerb.vue";
<<<<<<< HEAD
import {store} from "./store/verbs"
=======
import { store } from "./store/verbs"
>>>>>>> splitFormVerbsCheck

export default {
  name: "App",
  components: {
    rendomVerb,   
  },

  computed: {
<<<<<<< HEAD
   count () {
      return store.state.count
    }
=======
   verbArr(){
    return store.getters.rendArrFromVerbForms
   }
>>>>>>> splitFormVerbsCheck
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  background-color: rgb(215, 219, 248); 
  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
}
 
</style>
