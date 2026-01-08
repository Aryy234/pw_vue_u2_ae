<template>
  <div class="pokemon-container">
  <img :src="srcImagen" 
        alt="No se puede mostrar la imagen" />
  </div>
</template>

<script>
export default {
   props: {
    pokemonId: {
      type: Number,
      required: true
    }

  },
  computed: {
    srcImagen() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }
  }
}
</script>

<style>
    .pokemon-container {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
    img {
      height: 300px;
      width: auto;
      max-height: 100%;
      max-width: 100%;
    }

</style>