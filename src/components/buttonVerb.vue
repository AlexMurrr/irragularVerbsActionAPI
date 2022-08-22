<template>
    <div>
      <button v-if="isVisible" @click="isVisible=!isVisible">Start</button> 
      <button  v-else  @click="isVisible=!isVisible">show result</button> 
    </div>
</template>
<script>
export default{
    data(){
        return{
           isVisible: false,  
        }
    },
    methods:{
        
    },
    computed:{
        
    },
    props:{
        
    },
    created(){
        
    },
}
</script>
<style scoped>
</style>