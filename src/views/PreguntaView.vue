<template>
  <div class="pregunta-container">
     <Pregunta />
    
   </div>
</template>

<script>
import Pregunta from '@/components/Pregunta.vue';
export default {
    components: {
        Pregunta,
    }

}
</script>

<style>
.pregunta-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
}

body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: #282c34;
    color: white;
    height: 100vh;
    overflow: hidden;
}
</style>