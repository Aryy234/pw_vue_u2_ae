<template>
  <div>
    <img
      v-if="imagen"
      :src="imagen"
      alt="NO se encontró la imagen"
    />
    <div class="pregunta-container">
      <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
      <p>Recuerda terminar con el signo de interrogación (?)</p>
      <h2>{{ pregunta }}</h2>
      <h2>{{ respuesta }}</h2>

    </div>
  </div>
</template>

<script>
import {consumirAPIFacade, consumirAPIFacade2} from '../clients/YesNoClient.js';
export default {
    data(){
        return{
            pregunta: null,
            respuesta: null,
            imagen: null  
        };
    },
    watch:{
        pregunta(value, oldValue){
            if(value.includes('?')){
              //llamar a la API
              this.consumir();

            }
        }
    },
    methods: {
        async consumir(){
            const resp = await consumirAPIFacade2();
            console.log('Respuesta de la API: ');
            console.log(resp);
            console.log(resp.answer);
            this.respuesta = resp.answer;
            this.imagen = resp.image;
        }
    }
}
</script>

<style>
img {
  height: 100vh;
  width: 100vw;
  left: 200px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
}

.pregunta-container {
  position: relative;
  min-height: 100vh; /* altura de toda la pantalla */
  display: flex;
  /*flex-direction: column;*/ /* elementos uno debajo del otro */
  justify-content: center; /* centrado vertical */
  align-items: center; /* centrado horizontal */
  text-align: center;
  color: white;
}

input {
  width: 300px;
  padding: 10px 15px;
  border-radius: 25px;
  border: none;
}

input:focus {
  outline: none;
}

p {
  margin-top: 10px;
  margin-bottom: 40px;
  font-size: 14px;
  color: #dddddd;
}

h2 {
  font-size: 32px;
  margin-bottom: 20px;
}
</style>
