<template>
    
   <div>
    Simple Participle: &nbsp;&nbsp;
    <input v-model="simParticiple" type="text" 
    id="sParticiple"
    placeholder="простое причастие" />
    <h6 v-if="equelSimpleParticiple">It is awesome! +1</h6>
    <h6 v-else-if="equelSimpleParticiple===false">Oh no 😢 -1</h6>
    <h6 v-else-if="simParticiple===''"></h6>
  </div> 

</template>

<script>
export default {

    data () {
        return{
           
        }
    },

    computed:{
      
    },
    
    methods:{
        
        checkSimpleParticiple(enterd, trueValue){
      if (enterd===trueValue){ 
        this.equelSimpleParticiple = true;
        this.countPoint++;
      }else {
        this.equelSimpleParticiple = false; 
        this.countPoint--; 
      }          

    },
                         
    },
}


</script>

<style>

</style>