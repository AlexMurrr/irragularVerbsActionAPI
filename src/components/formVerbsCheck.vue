<template>
  <h3>Изучаем неправильные глаголы</h3>
  <h3>Введите для глагола: {{ irregularVerb }}</h3>
  <h3>
    {{ translate }} {{ simplePastV }}
    {{ simpleParticipleV }}
  </h3>
  <button @click="start">Start</button>  
  {{trans}}
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

   <button @click="
                   checkTranslate(trans, translate);
                   checkSimplePast(simPast, simplePastV);
                   checkSimpleParticiple(simParticiple, simpleParticipleV)
                   "  
   id="btn">show result</button>    

  
</template>

<script>
export default {
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
      equelSimpleParticiple: ''
    }
  },
  methods:{

    checkTranslate(enterd, trueValue){
      if (enterd===trueValue) {    
        this.equelTranslate = true;  
       } 
      else{      
      this.equelTranslate = false;
      }      
    },   
   
    checkSimplePast(enterd, trueValue){
      if (enterd===trueValue) {    
        this.equelSimplePast = true;  
       } 
      else{      
      this.equelSimplePast = false;
      }      
    },

     checkSimpleParticiple(enterd, trueValue){
      if (enterd===trueValue) {    
        this.equelSimpleParticiple = true;  
       } 
      else{      
      this.equelSimpleParticiple = false;
      }      
    },

    start(){
      this.trans = '';
      this.simPast = '';
      this.simParticiple = '';
      this.$emit('nextVerb')
      }  

  },
      
};
</script>

<style>
h {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

div {
  font-weight: 400;
  line-height: 1.45;
  font-size: 1.6rem;
  font-weight: 700;
}
</style>
