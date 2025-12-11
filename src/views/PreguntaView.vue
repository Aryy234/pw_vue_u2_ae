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
</style>