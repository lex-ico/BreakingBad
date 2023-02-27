export interface RouterLink {
    name: string; //nombre de la ruta
    title: string; //titulo que sale en pantalla
    path: string; //la ruta en si 

}


export const routerLinks = [


    {path: '/', name: 'home', title: 'Inicio' },
    {path: '/about', name: 'about', title: 'Sobre' },
    {path: '/characters', name: 'characters', title: 'Personajes' },
];

