<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue'
import { useQuery } from '@tanstack/vue-query';
import type { Result } from '../interfaces/characters';
import rickAndMorty from '@/api/rickAndMorty';
import type{ Characters } from '../interfaces/characters';


const props = defineProps<{title: string, visible:true}>()

const getCharacters = async(): Promise <Result[]> => {

    const {data} = await rickAndMorty.get<Characters>('/character');
    return data.results;
}

const {isLoading, data: characters} = useQuery(
    ['characters'],
    getCharacters,
    {
         cacheTime: 1000 * 120,
        refetchOnReconnect: 'always'
    }
)

</script>


<template>
    <h1 v-if="isLoading"> Loading...</h1>

    <template v-else>

    <h2>{{props.title}}</h2>
    <CardList :characters="characters!" />
    
    </template>

</template>


<style scoped>

</style>