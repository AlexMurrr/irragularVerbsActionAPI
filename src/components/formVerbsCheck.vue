<template>
  <h1>Изучаем неправильные глаголы</h1>
  <h2>Введите для глагола: {{ irregularVerb }}</h2>
  <h3>
    {{ translate }} {{ simplePastV }}
    {{ simpleParticipleV }}
  </h3>
  
  <div>
    Translate: &nbsp;&nbsp;
    <input v-model="trans"     
    type="text" id="translate" 
    placeholder="перевод" autofocus />   
  </div>

 
  <div>
    Simple Past: &nbsp;&nbsp;
    <input v-model="simPast" 
    type="text" id="sPast" 
    placeholder="простое прошедшее" />
  </div>

  <div>
    Simple Participle: &nbsp;&nbsp;
    <input v-model="simParticiple" type="text" 
    id="sParticiple"
    placeholder="простое причастие" />
  </div>

   <button class="btn" id="btn">show result</button>
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
      simParticiple:''
    }
  }
};
</script>

<style>
h {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  font-weight: 400;
  line-height: 1.45;
  font-size: 1.6rem;
  font-weight: 700;
}
</style>
