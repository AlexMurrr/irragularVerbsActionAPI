<template>
  <div class="circle">
   <h1 class="time">{{time}}</h1>
  </div>  
</template>

<script>
  import { store } from "../store/verbs"

  export default{
    data(){
      return{
        time: 0,
      }
    },

    methods:{
      go (){
        this.time +=1;
        if(this.time === 4) {
          this.time ='Go!';
          store.commit('rendomNumFromVerbs');           
        }         
      },    

      myLoop(){
        for(let i=0; i<4; i++){
          setTimeout(this.go, i*1500)       
      }         
    }, 
 },
    beforeMount(){
      this.myLoop();      
    }
  }
</script>

<style>
.circle {
  width: 100px; 
  height: 100px;
  background: #83A7C9;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
} 
.time{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}

</style>
