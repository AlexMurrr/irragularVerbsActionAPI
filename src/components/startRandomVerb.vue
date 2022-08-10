<template>
  <div class="circle">
   <h1 class="time">{{time}}</h1>
  </div>
</template>

<script>


  export default{
    data(){
      return{
        time: 3,
      }
    },

    methods:{
      
      

    },
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
