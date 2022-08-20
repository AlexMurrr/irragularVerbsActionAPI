<template>
    
  <div>
    Translate: &nbsp;&nbsp;
    <input v-model="trans"     
    type="text" id="translate" 
    placeholder="перевод" autofocus />  
    <h6 v-if="equelTranslate">It is awesome! +1</h6>
    <h6 v-else-if="equelTranslate===false">Oh no 😢 -1</h6> 
  </div>    

</template>

<script>

//import { store } from "../store/verbs"


export default {
  
    data () {
      return {
        trans: '',
        equelTranslate: ''
      }
    },

  //   computed:{
  //     verbArr(){
  //       return store.getters.infinitive
  //   },
  // },  
    
    methods:{
      checkTranslate(enterd, trueValue){
      if (enterd===trueValue){
        this.equelTranslate = true; 
        this.countPoint++;
      }else{ 
        this.equelTranslate = false; 
        this.countPoint--;                 
      }
      this.isVisibleButton = true;
    },     
  }
}
</script>

<style>

</style>