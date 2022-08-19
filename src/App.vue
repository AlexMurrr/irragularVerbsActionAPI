<template>
  <div>
    <rendom-verb /> 

    {{count}}

    </div>
</template>

<script>
import rendomVerb from "./components/rendomVerb.vue";
import {store} from "./store/verbs"

export default {
  name: "App",
  components: {
    rendomVerb,   
  },

  computed: {
   count () {
      return store.state.count
    }
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
