<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue'
import { useQuery } from '@tanstack/vue-query';
import type { Result } from '../interfaces/characters';
import rickAndMorty from '@/api/rickAndMorty';
import type{ Characters } from '../interfaces/characters';
import characterStore from '@/store/characters.store';

const props = defineProps<{title: string, visible:true}>()

const getCharactersCacheFirst = async(): Promise <Result[]> => {

    if (characterStore.characters.count > 0 ){
        return characterStore.characters.list;
    }

    const {data} = await rickAndMorty.get<Characters>('/character');

    return data.results;
}

useQuery(
    ['characters'],
    getCharactersCacheFirst,
    {

        onSuccess ( data ){
            characterStore.loadedCharacters(data);
        } 
    }

)

</script>


<template>
    <h1 v-if="characterStore.characters.isLoading"> Loading...</h1>

    <template v-else-if="characterStore.characters.hasError">
        <h1>Error al cargar</h1>
        <p>{{ characterStore.characters.errorMessage }}</p>

    </template>

    <template v-else>
        <h2>{{props.title}}</h2>
        <CardList :characters="characterStore.characters.list" />
    </template>
  

</template>


<style scoped>

</style>