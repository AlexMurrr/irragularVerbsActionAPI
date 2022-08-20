<template>
    
    <div>
    Simple Past: &nbsp;&nbsp;
    <input v-model="simPast" 
    type="text" id="sPast" 
    placeholder="простое прошедшее" />
    <h6 v-if="equelSimplePast">It is awesome! +1</h6>
    <h6 v-else-if="equelSimplePast===false">Oh no 😢 -1</h6>
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
      checkSimplePast(enterd, trueValue){
        if (enterd===trueValue){
          this.equelSimplePast = true;
          this.countPoint++;
          }else {
            this.equelSimplePast = false;
            this.countPoint--;
      }                    
    },
    }

}
</script>

<style>

</style>