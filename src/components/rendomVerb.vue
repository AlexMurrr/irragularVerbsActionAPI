<template>
  <formVerbs
  v-bind="rendomNumFromVerbs"
    :irregularVerb="rendArrFromVerbForms[0]"
    :translate="rendArrFromVerbForms[1]"
    :simplePastV="rendArrFromVerbForms[2]"
    :simpleParticipleV="rendArrFromVerbForms[3]"
    @nextVerb = rendomNumFromVerbs
  />

  <div></div>
</template>

<script>
import formVerbs from "./formVerbsCheck.vue";
export default {
  components: {
    formVerbs,
  },

  data() {
    return {
      verbForms: {
        0: ["be", "[быть, являться]", "['was, were']", "been"],
        1: ["beat", "[бить, колотить]", "beat", "beaten"],
        2: ["become", "становиться", "became", "become"],
      },
      rendArrFromVerbForms: [],      
    };
  },
 
 
  methods: {
    rendomNumFromVerbs() {          
       this.rendArrFromVerbForms = this.verbForms[Math.floor(Math.random() *
        Object.keys(this.verbForms).length)]
    },

    created: function(){
        this.rendomNumFromVerbs()
    }
  
  }
}
</script>

<style></style>
