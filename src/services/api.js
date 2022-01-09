import axios from 'axios';

//Primeiro, crie uma base url: http://sujeitoprogramador.com/

//r-api/?api=filmes todos os filmes

//r-api/?api=filmes/id {filme em específico}

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;