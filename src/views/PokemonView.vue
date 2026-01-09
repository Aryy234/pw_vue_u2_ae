<template>
    <div v-if="mostrar">
        <h2 v-if="mensaje" :class="{'ganado': esGanador, 'perdido': !esGanador}">{{ mensaje }}</h2>
        <PokemonImagen :pokemonId="pokemonGanador" />
        <PokemonOpciones @pokemonSeleccionado="evaluarGanador($event)" :listaPokemon="pokemonArr" />
        <button @click="Destruir">Destruir</button>
    </div>
</template>
 
<script>
import { obtenerAleatorioFacade, obtenerVectorPokemonFacade } from '@/clients/PokemonClient';
import PokemonImagen from '@/components/PokemonImagen.vue';
import PokemonOpciones from '@/components/PokemonOpciones.vue';
 
export default {
    components: {
        PokemonImagen,
        PokemonOpciones
    },
    data() {
        return {
            pokemonArr: [],
            pokemonGanador: 0,
            mensaje: '',
            esGanador: false,
            mostrar: true
        };
    },

    /*Crea el componente*/
    beforeCreate() {
        console.log('Before Create: Apenas se inicializan las propiedades reactivas');
    },

    created() {
        console.log('Created: Se ha creado el componente y las propiedades reactivas están disponibles');
    },

    beforeMount() {
        console.log('Before Mount: El componente está a punto de montarse en el DOM');
    },

    /*Montaje del componente*/
    mounted() {
        console.log('Mounted: Se ha montado el componente en el DOM');
        this.iniciarJuego();
    },

    /*Actualización del componente*/
    updated() {
        console.log('Updated: El componente se ha actualizado debido a cambios en los datos reactivos');
    },
    beforeUpdate() {
        console.log('Before Update: El componente está a punto de actualizarse');
    },

    /*Desmontaje del componente*/
    beforeUnmount() {
        console.log('Before Unmount: El componente está a punto de ser desmontado del DOM');
    },

    unmounted() {
        console.log('Unmounted: El componente ha sido desmontado del DOM');
    },

    methods: {
        async iniciarJuego() {
            this.pokemonArr = await obtenerVectorPokemonFacade();
            console.log(this.pokemonArr);
            const ganadorIndex = obtenerAleatorioFacade(0, 3);
            this.pokemonGanador = this.pokemonArr[ganadorIndex].id;
            console.log("Pokémon ganador: ", this.pokemonArr[ganadorIndex].name);
        },
        evaluarGanador(idGanador) {
            console.log("Valor recibido en padre")
            console.log("Pokémon seleccionado en la vista: ", idGanador);
            if (idGanador === this.pokemonGanador) {
                console.log("¡Has ganado!");
                this.mensaje = "¡Has ganado!";
                this.esGanador = true;
            } else {
                console.log("¡Has perdido!");
                this.mensaje = "¡Has perdido!";
                this.esGanador = false;
            }
            setTimeout(() => {
                this.mensaje = '';
                this.iniciarJuego();
            }, 2000);
        },
        Destruir() {
            this.mostrar = false;
        }
    },
    mounted() {
        console.log('Mounted');
        this.iniciarJuego();
    }
   
}
</script>
 
<style scoped>
div {
    text-align: center;
    padding: 20px;
}

h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
}

.ganado {
    color: green;
    background-color: #d4edda;
    border: 2px solid green;
}

.perdido {
    color: red;
    background-color: #f8d7da;
    border: 2px solid red;
}
</style>