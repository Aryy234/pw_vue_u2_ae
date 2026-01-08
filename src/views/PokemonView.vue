<template>
  <div>
    <PokemonImagen :pokemonId="120" />
    <PokemonOpciones />
  </div>
</template>

<script>
    import PokemonImagen from '../components/PokemonImagen.vue';
    import PokemonOpciones from '../components/PokemonOpciones.vue';
export default {
    
  components: {
    PokemonImagen,
    PokemonOpciones
  }
}
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
</style>