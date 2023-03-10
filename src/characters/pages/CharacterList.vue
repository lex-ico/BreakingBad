<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue'
import useCharacters from '@/characters/composables/useCharacters';


const {
    isLoading,
    hasError,
    errorMessage,
    characters,
    count
    } = useCharacters();

const props = defineProps<{ title: string, visible:true }>();

</script>


<template>
    <h1 v-if="isLoading"> Loading...</h1>

    <template v-else-if="hasError">
        <h1>Error al cargar</h1>
        <p>{{ errorMessage }}</p>

    </template>

    <template v-else>
        <h2>{{props.title}} - {{ count }}</h2>
        <CardList :characters="characters" />
    </template>
  

</template>


<style scoped>

</style>