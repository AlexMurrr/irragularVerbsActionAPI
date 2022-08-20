<template> 
 
<h3>Изучаем неправильные глаголы</h3>
<h3>Введите для глагола: {{infinitive}}</h3> 

</template>

<script>

import {store} from "../store/verbs"

export default {

  computed: {      
    infinitive(){
      return store.getters.infinitive;
    }
  },

}

</script>