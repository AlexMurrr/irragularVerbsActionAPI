<template> 
 
<h3>Изучаем неправильные глаголы</h3>
<h3>Введите для глагола: {{verbArr[0]}}</h3> 

</template>

<script>
import { store } from "../store/verbs"

export default {

  computed: {
      verbArr(){
        return store.getters.rendArrFromVerbForms
    }

  },

}

</script>