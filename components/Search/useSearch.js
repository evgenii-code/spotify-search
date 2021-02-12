import { ref, useContext } from '@nuxtjs/composition-api';

export default function useSearch({ context }) {
    const { $axios } = useContext();

    const results = ref({});

    const fetchSearchResults = (query, type) => {
        return $axios
            .get(`/search?query=${query}&type=${type}`)
            .then((responce) => {
                results.value = responce.data;

                return Promise.resolve(responce);
            });
    };

    return {
        // Reactive data
        results,

        // Methods
        fetchSearchResults,
    };
}
