<script setup lang="ts">
import { RouterView } from 'vue-router';
import { routerLinks } from '@/router/link-routes';
import NavBar from '@/shared/components/NavBar.vue';
</script>




<template>
  <div class="wrapper">

    <header>
      <NavBar title="RickAndMorty"
       :links="routerLinks" />
    </header>

    <main>
    <RouterView/>
    </main>
  </div>
</template>



<style scoped>
  .wrapper{
  
    display: flex;
    flex-direction: column;
  }
</style>
