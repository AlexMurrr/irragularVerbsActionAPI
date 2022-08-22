<template>
 
   <head-verb/>
   <translate-verb/>
   <simple-past/>
   <simple-participle/>
   <button-verb/>

  
 
</template>

<script>
import headVerb from "./headVerb.vue"
import translateVerb from "./translateVerb.vue"
import simplePast from "./simplePast.vue"
import simpleParticiple from "./simpleParticiple.vue"
import buttonVerb from "./buttonVerb.vue"
export default {

   components:{
    headVerb,
    translateVerb,
    simplePast,
    simpleParticiple,
    buttonVerb
   }, 

  props: {      
    
  },
  data(){
    return {         
      equelTranslate: '',      
      isVisibleButton: false,
      countPoint: 0,
    }
  },
  methods:{     

    start(){                   
      this.isVisibleButton = false; 
      this.countPoint = 0;
      
      },
      
    countPointEmit(){
      
    },
   
  },
  computed:{
   
    }    
};
</script>

<style>
h {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252a30;
  margin-top: 10px;
}

div {
  font-weight: 400;
  line-height: 0.9;
  font-size: 1.6rem;
  font-weight: 700;
}

button{
  color: #315727;
  position: relative;
  place-content: center;
  place-items: center;
  width: fit-content;
  border-radius: 70px;
  letter-spacing: 0.05em;
  border: 3px solid #2d8579;
  text-decoration: none;
  text-transform: uppercase;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0.7rem 1.8rem;
  white-space: nowrap;
  font-weight: 700;
  outline: none;
  background: #e2eddf;
  transition: all 0.22s;
}

input {
  font-weight: 40;
  width: 300px;
  font-size: 15px;
  padding: 6px 0 4px 10px;
  border: 2px solid #474169;
  background: #e2eddf;
  border-radius: 20px;
}
</style>
