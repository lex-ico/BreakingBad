import { computed, ref } from 'vue';
import type { Characters, Result } from '@/characters/interfaces/characters';
import rickAndMorty from '@/api/rickAndMorty';
import { useQuery } from '@tanstack/vue-query';

const characters = ref<Result[]>([]);
const isLoading = ref<boolean>(false);
const hasError = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

//

const getCharacters = async(): Promise <Result[]> => {

    if (characters.value.length > 0 ){
        return characters.value;
    }

    const {data} = await rickAndMorty.get<Characters>('/character');

    return data.results;
}

//
const loadCharacters = ( data: Result[] ) => {
    hasError.value = false;
    errorMessage.value = null;
    characters.value = data;
}

//

const useCharacters = () => {
    
    useQuery(
        ['characters'],
        getCharacters,
        {
            onSuccess: loadCharacters,
        }

    );

    return {
        characters,
        errorMessage,
        isLoading,
        hasError,
        count: computed( () => characters.value.length)
    }
}

export default useCharacters;