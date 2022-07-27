<template>
  <h3>Изучаем неправильные глаголы</h3>
  <h3>Введите для глагола: {{ irregularVerb }}</h3>
  <h3>
    {{ translate }} {{ simplePastV }}
    {{ simpleParticipleV }}
  </h3>
 
  {{countPoint}}
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

   <button v-if="isVisibleButton" @click="start">Start</button> 
   <button  v-else @click="
                    checkTranslate(trans, translate);
                    checkSimplePast(simPast, simplePastV);
                    checkSimpleParticiple(simParticiple, simpleParticipleV)
                    countPointEmit()
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
      equelSimpleParticiple: '',
      isVisibleButton: true,
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
    }  

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
</style>
