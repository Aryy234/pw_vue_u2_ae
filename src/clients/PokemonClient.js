import axios from 'axios';

const consumirAPI = async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.data);
    console.log(response);
    return response;
}

function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerVectorNumerico = () => {
    const vector=[];
    for (let i=0; i<4; i++) {
        vector[i]=obtenerAleatorio(1,600);

    }
    return vector;
}

const obtenerVectorPokemon = (vectorNumerico) => {
    consumirAPI(vectorNumerico[0]);
    consumirAPI(vectorNumerico[1]);
    consumirAPI(vectorNumerico[2]);
    consumirAPI(vectorNumerico[3]);

    const obj1 ={
        nombre:data1.name,
        id:data1.id
    };
    const obj2 ={
        nombre:data2.name,
        id:data2.id
    };
    const obj3 ={
        nombre:data3.name,
        id:data3.id
    };
    const obj4 ={
        nombre:data4.name,
        id:data4.id

    }

}