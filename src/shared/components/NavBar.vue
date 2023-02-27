
<script setup lang="ts">

import type { RouterLink } from '@/router/link-routes';


interface Props {
    title?: string,
    links: RouterLink[];
    showIcon?: boolean;

}

const props = withDefaults( defineProps<Props>(), {
    showIcon:true,
    links: () => [], //las listas vacias se escriben con una funcion 
});

</script>


<template>
    <nav>
    <img
              v-if="props.showIcon"
              src="@/assets/logo.svg"
              alt="Vue logo"
              height="25"
              width="25">

        <span v-if="props.title">{{props.title}}</span>

        <router-link
            v-for="link of links" 
            :key="link.path"
            :to ="link.path">
            {{ link.title }}
        </router-link> 
        <!-- <RouterLink to ="/about">Sobre</RouterLink>  -->
    </nav>
</template>


<style scoped>
nav {
    width: 100%;
    font-size: 17px;
    text-align: center;

    margin-top: 10px;

    display: flex;
    align-items: center;
    
  }

  img {

    margin-right: 5px;

  }

  span {
    margin-right: 5px;
  }

  a {
    margin-right: 5px;
  }
</style>