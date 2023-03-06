import rickAndMorty from "@/api/rickAndMorty";
import type { Characters, Result } from "@/characters/interfaces/characters";
import { reactive } from "vue";

export{}
interface Store {

    characters: {
        list: Result[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;
    }

    startLoadingCharacters: () => void;


    loadedCharacters: ( data: Result[] ) => void;

    loadCharactersFailed:(error: string) => void;


}
//funcion reactiva como ref para pequeñas y reactive para grandes
const characterStore = reactive<Store>({
   
    characters: {
        count: 0,
        errorMessage:null,
        hasError: false,
        isLoading: true,
        list: []
    },

    async startLoadingCharacters(){
        
        const {data} = await rickAndMorty.get<Characters>('/character');

        this.loadedCharacters(data.results);
    },

    loadedCharacters (data: Result[] | string){
        //hacer una validación:
        if (typeof data === 'string') {
            return this.loadCharactersFailed('La respuesta no es una lista de personajes');
        }

        const characters = data;

        this.characters = {
            count: characters.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: characters


        }

    },

    loadCharactersFailed (error: string){
        this.characters = {
            count: 0,
            errorMessage: error,
            hasError: true,
            isLoading: false,
            list: []

        }
    }
});

characterStore.startLoadingCharacters();

export default characterStore;