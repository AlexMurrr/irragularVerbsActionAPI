<template>
 
   <head-verb/>

   <button v-if="isVisibleButton" @click="start">Start</button> 
   <button  v-else @click="
                    checkTranslate(trans, translate);
                    checkSimplePast(simPast, simplePastV);
                    checkSimpleParticiple(simParticiple, simpleParticipleV);
                    countPointEmit();
                  "   
   id="btn">show result</button>    
  
  <div>
    Translate: &nbsp;&nbsp;
    <input v-model="trans"     
    type="text" id="translate" 
    placeholder="перевод" autofocus />  
    <h6 v-if="equelTranslate">It is awesome! +1</h6>
    <h6 v-else-if="equelTranslate===false">Oh no 😢 -1</h6> 
  </div>    
 
  <div>
    Simple Past: &nbsp;&nbsp;
    <input v-model="simPast" 
    type="text" id="sPast" 
    placeholder="простое прошедшее" />
    <h6 v-if="equelSimplePast">It is awesome! +1</h6>
    <h6 v-else-if="equelSimplePast===false">Oh no 😢 -1</h6>
  </div>

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
import headVerb from "./headVerb.vue"
export default {

   components:{
    headVerb
   }, 

  props: {
    irregularVerb: String,
    translate: String,
    simplePastV: String,
    simpleParticipleV: String,
  },
  data(){
    return {
      trans: '',
      simPast: '',
      simParticiple:'',
      equelTranslate: '',
      equelSimplePast: '',
      equelSimpleParticiple: '',
      isVisibleButton: false,
      countPoint: 0,
    }
  },
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
   
    checkSimplePast(enterd, trueValue){
      if (enterd===trueValue){
        this.equelSimplePast = true;
        this.countPoint++;
      }else {
        this.equelSimplePast = false;
        this.countPoint--;
      }                    
    },

    checkSimpleParticiple(enterd, trueValue){
      if (enterd===trueValue){ 
        this.equelSimpleParticiple = true;
        this.countPoint++;
      }else {
        this.equelSimpleParticiple = false; 
        this.countPoint--; 
      }          

    },

    start(){
      this.trans = '';
      this.simPast = '';
      this.simParticiple = '';              
      this.isVisibleButton = false; 
      this.countPoint = 0;
      this.$emit('nextVerb');      
      },
      
    countPointEmit(){
      this.$emit('countPoint', this.countPoint)
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
