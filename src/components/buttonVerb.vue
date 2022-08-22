<template>
    <div>
      <button v-if="isVisible" @click="changebutton">Start</button> 
      <button  v-else  @click="changebutton">show result</button> 
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
        changebutton(){
            this.isVisible = !this.isVisible
        },
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