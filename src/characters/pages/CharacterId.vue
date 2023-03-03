<script setup lang="ts">

    // router es para hacer vinculos 
    // el route es para conseguir datos
    import { useRoute } from 'vue-router';
    import rickAndMorty from '@/api/rickAndMorty';
    import type { Result } from '@/characters/interfaces/characters';
    import { useQuery } from '@tanstack/vue-query';


    const route = useRoute();

    // const params = route.params.id;
    //desestructurar params:
    const {id} = route.params as {id:string}; //esto es un 'casting' aunque sea un numero lo interpreta como un string para poder tener acceso a los valores de los strings 

    //vease la funcion de CharacterList para una funcion sin parametro de entrada
    //todos los query parametros serán strings, ya lo declaramos anteriormente si no deberiamos escribir string | string []
    //async siempre devuelve promesas
    const getCharacter = async ( characterId: string):Promise<Result> => {
       
        const {data}  = await rickAndMorty.get<Result>(`/character/${characterId}`);
        
        return data;
    }

    //aqui pondremos la caché, se trata de una caché compuesta
    //al usar funciones con parametros no podemos usar solo el nombre cuando tiene un parametro dentro porque 
    // () => getCharacter () esta bien 
    // () => getCharacter (id)
    const { data: character } = useQuery(
        ['character', id], 
        () => getCharacter(id),

        {
            cacheTime: 1000 * 120,
            refetchOnReconnect: 'always'
        }

    );




</script>


<template>
    
    <h1 v-if="!character"> Loading...</h1>

    <div  v-else>
        <h1>{{ character.name }}</h1>

        <div class="character-container">

            <img :src="character.image" :alt="character.name">

            <ul>
            <li>Estado: {{ character.status }}</li>
            <li>Especie: {{ character.species}}</li>
            <li>Tipo: {{ character.type }}</li>
            <li>Genero: {{ character.gender }}</li>
            <li>Locaclización: {{ character.location.name }}</li>
            <li>Episodios: 
                <span v-for="cosa of character.episode" :key="cosa">
                    {{ cosa.split('/')[cosa.split('/').length-1]}},
                </span>
            </li>   
            </ul>
        
        </div>
    </div>



    <!-- <code>
    {{ character }}
    </code> -->
</template>


<style scoped>
    .character-container{
        display:flex;
        flex-direction: row;
        margin: 20px 10px;

    }

    img{
        width: 300px;
        border-radius: 5px;

    }

    ul{
        font-size: 20px;
        text-decoration: none;
    }

    li{
        list-style: none;
    }
</style>
