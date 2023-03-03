
<script setup lang="ts">

    // import rickAndMorty from '@/api/rickAndMorty';
    // import axios from 'axios';
    // import { ref } from 'vue';
    // import type { Characters, Result } from '../interfaces/characters';

    // import { useCharacters } from '@/characters/composables/useCharacters';
    // import { useQuery } from '@tanstack/vue-query';
    // import rickAndMorty from '@/api/rickAndMorty';
    // import type { Characters, Result } from '@/characters/interfaces/characters';
    import CharacterCard  from '@/characters/components/CharacterCard.vue';
    import type { Result } from '@/characters/interfaces/characters';
    // const {isLoading, characters, hasError, errorMessage} = useCharacters();




    // const getCharactersSlow = async(): Promise<Result[]> => {

    //     //simular que internet va despacio:
    //     return new Promise ( resolve => {
    //         setTimeout( async() => {

    //             const { data } = await rickAndMorty.get<Characters>('/character');
    //             // return data.results;
    //             resolve(data.results);

    //         }, 3000)
    //     });


    // }
    //desestructuracion:
    // const { isLoading, isError, data:characters, error } = useQuery( 
    //         ['character'], 
    //         getCharactersSlow,
    //         {
    //             cacheTime: 1000 * 60,
    //             refetchOnReconnect: 'always'
    //         }

    // );

    interface Props {
        characters: Result[],
        
    }

    const props = defineProps<Props>();

</script>


<template>
    <!-- <h1 v-if="isLoading"> Loading...</h1> -->

    <!-- <h1 v-if="isError"> {{ error }}</h1> -->

    <div class="card-list">
    <!-- <li
        v-for="{name, id} of characters"
        :key="id">
        {{name}}
    </li> -->
    <CharacterCard
        v-for="character of props.characters"
        :key="character.id"
        :character="character" />
    </div>

</template>


<style scoped>

.card-list  {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
</style>