<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue'


const props = defineProps<{title: string, visible:true}>()

</script>


<template>
    <h2>{{props.title}}</h2>
    
    <CardList />

</template>


<style scoped>

</style>