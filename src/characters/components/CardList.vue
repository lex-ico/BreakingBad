
<script setup lang="ts">

    // import rickAndMorty from '@/api/rickAndMorty';
    // import axios from 'axios';
    // import { ref } from 'vue';
    // import type { Characters, Result } from '../interfaces/characters';
import { useCharacters } from '@/characters/composables/useCharacters';


    const {isLoading, characters, hasError, errorMessage} = useCharacters();

</script>


<template>
    <h1 v-if="isLoading"> Loading...</h1>

    <h1 v-if="hasError"> {{ errorMessage }}</h1>
    <ul>
    <li
        v-for="{name, id} of characters"
        :key="id">
        {{name}}
    </li>

    </ul>
</template>


<style scoped>

</style>