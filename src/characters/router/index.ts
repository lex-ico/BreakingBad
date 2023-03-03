import type { RouteRecordRaw } from "vue-router";
// import CharacterLayout from "@/characters/layout/CharacterLayout.vue";
// import CharacterId from "@/characters/pages/CharacterId.vue";
// import CharacterList from "@/characters/pages/CharacterList.vue";
// import CharacterSearch from "@/characters/pages/CharacterSearch.vue";
import CharacterLayout from "@/characters/layout/CharacterLayout.vue";
import CharacterId from "../pages/CharacterId.vue";
import CharacterList from "../pages/CharacterList.vue";
import CharacterSearch from "../pages/CharacterSearch.vue";

const ROUTE_NAME = 'characters';


// creamos rutas hijas
export const characterRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,

    redirect: 'characters/list',

    component: CharacterLayout,

    //los dos puntos nos indican que es un elemento dinamico
    children: [
        { 
            path: 'by/:id', 
            name: 'character-id', 
            props: { title: 'Por Id', visible: false},
            component: CharacterId,
        },
        {
            path: `/${ROUTE_NAME}/list`, //es lo mismo que poner solo list, pero al entrar en otra pagina no podremos volver a list y que se renderice
            name: 'character-list', 
            props: { title: 'Lista', visible: true},
            component: CharacterList,
        },
        { 
            path: `/${ROUTE_NAME}/search`, 
            name: 'character-search', 
            props: { title: 'Búsqueda', visible: true},
            component: CharacterSearch,
        },
    ],

};



// 
// const router = createRouter({
//     history: createWebHistory( import.meta.env.BASE_URL ),

//     routes: [
//         { path: '/', name: 'home', component: HomePage},
//         { path: '/about', name: 'about', component: AboutPage},
//         {
//             path: '/characters',
//             name: 'characters',
//             // carga perezosa, lazy load:
//             component:  () => import ('@/characters/layout/CharacterLayout.vue')
//         },
//         {path: '/:pathMatch(.*)', redirect: () => ({name: 'home'}) }
//     ]
// });