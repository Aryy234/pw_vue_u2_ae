<template>
    <div class="opciones-container">
        <ul>
            <li v-on:click="pasarPadre(pokemon.id)" v-for="pokemon in listaPokemon" :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        listaPokemon: {
            type: Array,
            required: true
        }
    },
    methods: {
        pasarPadre(idGanador) {
            this.$emit('pokemonSeleccionado', idGanador);
        }
    }
}
</script>
<style scoped>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        background-color: white;
        border-radius: 5px;
        border: 1px solid #333;
        cursor: pointer;
        width: 250px;
        margin: 10px auto;
        padding: 15px;
        text-align: center;
        color: black;
        font-size: 16px;
        font-weight: bold;
        text-transform: capitalize;
    }
    li:hover {
        background-color: #e0e0e0;
    }
    .opciones-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>