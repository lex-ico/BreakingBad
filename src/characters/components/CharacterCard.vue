<script setup lang="ts">

import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import type { Result } from '../interfaces/characters';


    const props = defineProps<{ character:Result }>();
    const character = toRef(props, 'character');

    const router = useRouter();

    const goTo = () => {
        router.push (`by/${character.value.id}`);
    }


</script>

<template>
    <div class="character-card" @click="goTo()">
        <img :src="props.character.image" alt="">
        <h3>{{ props.character.name }}</h3>
    </div>
</template>


<style scoped>
    .character-card{
        margin-right: 5px;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;


    }

    img{
        width: 100%;
        border-radius: 5px 5px 5px 5px;
        box-shadow: 0px 2px 10px rgba(85, 84, 84, 0.4);
        transition: all .5s;

    }

    img:hover{
        box-shadow: 0px 2px 10px rgba(255, 255, 255, 1);
        transition: all .5s;
    }
</style>