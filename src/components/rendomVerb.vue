<template>

<div class="divFormVerbs">

  <formVerbs  
      
  />   
  <num-points 
    class="point"
    :numPoint="numberPoint"    
  />
 
   <start-randomVerb
    
    />
  </div>  
  
</template>

<script>
import formVerbs from "./formVerbsCheck.vue";
import numPoints from "./numPoints.vue";
import startRandomVerb from "./startRandomVerb.vue"

export default {
  components: {
    formVerbs,
    numPoints,
    startRandomVerb,
  },

  data() {
    return {
      verbForms: {
        0: ["be", "[быть, являться]", "['was, were']", "been"],
        1: ["beat", "[бить, колотить]", "beat", "beaten"],
        2: ["become", "становиться", "became", "become"],
      },
      rendArrFromVerbForms: [],  
      numberPoint: 0,    
    };
  }, 
 
  methods: {
   
    getCountPoint(count){
        this.numberPoint+=count;
    },
  
  },  
}
</script>

<style>
  .divFormVerbs{
    background-color: rgb(139, 192, 192);
    width: 1000px;     
    height: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  .point{
    background-color: rgb(161, 161, 216);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    border: 5px;    
    position: absolute;
    top: 40px; 
    left: 1030px;
    bottom: 0; right: 0;
  }
</style>
