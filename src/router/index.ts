import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import { characterRoute } from '@/characters/router/index';
import{ createRouter, createWebHistory } from 'vue-router';

// creamos el router
const router = createRouter({

    history: createWebHistory( import.meta.env.BASE_URL ),

    routes: [
        { 
            path: '/', 
            name: 'home', 
            component: HomePage
        },
        { 
            path: '/about', 
            name: 'about', 
            component: AboutPage},
        


            {
                ...characterRoute ,
            path: '/characters'
        },

        {
            path: '/:pathMatch(.*)', 
            redirect: () => ({name: 'home'}) 
        }
    ]
});

export default router; 