import axios from 'axios';

const rickAndMorty = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});

export default rickAndMorty;